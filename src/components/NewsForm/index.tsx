import React, { useState } from 'react';
import marked from 'marked';
import _ from 'lodash';

import { NewsData, UserData } from '../../types';
import { Form } from './styles';

type NewsFormProps = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  newsState: NewsData;
  setNewsState: React.Dispatch<React.SetStateAction<NewsData>>;
  users: UserData[];
  buttonText: string;
}

const NewsForm: React.FC<NewsFormProps> = ({
  onSubmitHandler, newsState, setNewsState, users, buttonText = '',
}) => {
  const [normalContent, setNormalContent] = useState('');

  const onChangeInput = (field: string) => (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    if (field === 'content') {
      setNormalContent(value);

      _.debounce(() => setNewsState({
        ...newsState,
        content: marked(value),
      }), 500)();

      return;
    }
    setNewsState({ ...newsState, [field]: value });
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="title">
          Título da notícia
          <input
            type="text"
            name="title"
            placeholder="Digite o titulo."
            value={newsState.title}
            onChange={onChangeInput('title')}
          />
        </label>

        <label htmlFor="author">
          Escolha o autor
          <input
            list="users"
            name="author"
            id="author"
            placeholder="Escolha o autor da notícia."
            value={users.find((u) => u._id === newsState.authorID)?.name}
            onChange={onChangeInput('authorID')}
          />
          <datalist id="users">
            {users.map((u) => <option key={u._id} value={u._id}>{u.name}</option>)}
          </datalist>
        </label>
        <label htmlFor="image">
          url da imagem
          <input
            type="url"
            name="image"
            placeholder="url da imagem principal."
            value={newsState.image}
            onChange={onChangeInput('image')}
          />
        </label>
      </div>

      <div id="news-content">
        <textarea
          value={normalContent || newsState.content}
          onChange={onChangeInput('content')}
          placeholder="# Escreva a notícia em markdown."
        />
        <div dangerouslySetInnerHTML={{ __html: newsState.content }} />
      </div>

      <button type="submit">{buttonText}</button>
    </Form>
  );
};

export default NewsForm;
