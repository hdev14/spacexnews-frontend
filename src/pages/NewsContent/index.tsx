import React, { useRef, useMemo } from 'react';
import { useHistory, useLocation  } from 'react-router-dom';

import Modal from '../../components/Modal/index'
import { ModalHandler } from '../../components/Modal/ModalHandler'
import httpClient from '../../http-client';
import { NewsData, UserData } from '../../types';

import { Container } from './styles';

const NewsContent: React.FC = () => {
  const history = useHistory();
  const deleteModalRef = useRef<ModalHandler>(null);
  const { state } = useLocation<{ news: NewsData, author: UserData }>();

  function openModal() {
    deleteModalRef.current?.toggleModal();
  }

  const formatDate = useMemo(() => (d: string) => {
    const date = new Date(d);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;;
  }, []);

  const deleteNews = async () => {
    try {
      await httpClient.delete(`news/${state.news._id}`);
      history.push('/');
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <div id="header">
        <div id="left">
          <time dateTime={state.news.createdAt}>
            {formatDate(state.news.createdAt || '')}
          </time>
          <strong>{state.author.name}</strong>
          <h1>{state.news.title}</h1>
        </div>

        <div id="right">
          <button onClick={() => history.push('/edit/news', { news: state.news })}>editar</button>
          <button className="delete" type="button" onClick={openModal}>excluir</button>
        </div>
      </div>

      <main dangerouslySetInnerHTML={{ __html: state.news.content }} />

      <Modal ref={deleteModalRef} confirm={deleteNews} confirm_text="Sim. excluir">
        <p>Tem certeza que você deseja excluir essa notícia?</p>
      </Modal>
    </Container>
  );
}
export default NewsContent;
