import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import httpClient from '../../http-client';
import NewsForm from '../../components/NewsForm';
import { NewsData, UserData } from '../../types';
import { Container } from './styles';

const newsInitialState: NewsData = {
  title: '',
  content: '<h1> Escreva a notícia em markdown. </h1>',
  authorID: '',
  image: ''
};

const CreateNews: React.FC = () => {
  const [news, setNews] = useState<NewsData>(newsInitialState);
  const [users, setUsers] = useState<UserData[]>([]);
  const history = useHistory();

  useEffect(() => {
    (async function fetchUsers() {
      try {
        const response = await httpClient.get('/users');
        setUsers(response.data);
      } catch(err) {
        toast.warn('Não foi possível carregar os autores.');
        console.error(err);
      }
    })();
  }, [])

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await httpClient.post('/news', news);
      setNews(newsInitialState);
      history.push('/');
    } catch(err) {
      toast.error('Não foi possível cadastrar a notícia.');
      console.error(err);
    }
  }

  return (
    <Container>
      <h1>nova notícia</h1>

      <NewsForm
        onSubmitHandler={onSubmitHandler}
        newsState={news}
        setNewsState={setNews}
        users={users}
        buttonText="salvar" />
    </Container>
  );
}

export default CreateNews;
