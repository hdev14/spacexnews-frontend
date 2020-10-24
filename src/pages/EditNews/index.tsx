import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import httpClient from '../../http-client';
import NewsForm from '../../components/NewsForm';
import { NewsData, UserData } from '../../types';
import { Container } from './styles';

const newsInitialState: NewsData = {
  title: '',
  content: '',
  authorID: '',
  image: ''
};

const CreateNews: React.FC = () => {
  const { state } = useLocation<{ news: NewsData }>()
  const [news, setNews] = useState<NewsData>(newsInitialState);
  const [users, setUsers] = useState<UserData[]>([]);
  const history = useHistory();

  useEffect(() => {
    setNews(state.news);
  }, [state.news]);

  useEffect(() => {
    (async function fetchUsers() {
      try {
        const response = await httpClient.get('/users');
        setUsers(response.data);
      } catch(err) {
        console.error(err);
      }
    })();
  }, [])

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await httpClient.put(`/news/${news._id}`, {
        title: news.title,
        content: news.content,
        authorID: news.authorID,
        image: news.image
      });
      setNews(newsInitialState);
      history.push('/');
    } catch(err) {
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
        buttonText="atualizar" />
    </Container>
  );
}

export default CreateNews;
