import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import httpClient from '../../http-client';
import { NewsData, UserData } from '../../types';

import { Container, NewsGrid } from './styles';

const Home = () => {
  const history = useHistory();
  const [news, setNews] = useState<NewsData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    ((async function fetchNews() {
      try {
        const [newsResponse, usersResponse] = await Promise.all([
          httpClient.get<NewsData[]>('/news'),
          httpClient.get<UserData[]>('/users'),
        ]);
        setNews(newsResponse.data);
        setUsers(usersResponse.data);
      } catch (err) {
        toast.warn('Não foi possível carregar as notícias.');
        console.error(err);
      }
    })());
  }, []);

  const findAuthorById = useMemo(() => {
    return (id: string): UserData | undefined => {
      return users.find((u) => u._id === id);
    };
  }, [users]);

  const formatDate = useMemo(() => (d: string) => {
    const date = new Date(d);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }, []);

  return (
    <Container>
      <button type="button" onClick={() => history.push('/create/news')}>nova notícia</button>
      {news.length > 0 ? (
        <NewsGrid>
          {news.map((n) => (
            <Link
              key={n._id}
              to={{
                pathname: `/news/${n.slug}`,
                state: {
                  news: n,
                  author: findAuthorById(n.authorID),
                },
              }}
            >
              <h2>{n.title}</h2>
              <div>
                <time dateTime={n.createdAt}>
                  {formatDate(n.createdAt || '')}
                </time>
                <strong>
                  { findAuthorById(n.authorID)?.name}
                </strong>
              </div>
              <img src={n.image} alt={n.title} />
            </Link>
          ))}
        </NewsGrid>
      ) : (
        <p>Nenhuma notícia cadastrada.</p>
      )}
    </Container>
  );
};

export default Home;
