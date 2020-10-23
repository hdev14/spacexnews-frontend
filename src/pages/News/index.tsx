import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, NewsGrid } from './styles';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <button onClick={() => history.push('/create/news')}>nova notícia</button>
      <NewsGrid>
        <Link to="/news/slug">
          <h2>NEWS TITLE TITLE TITLE TITLE TITLE</h2>
          <div>
            <time dateTime="23/10/2020">23/10/2020</time>
            <strong>author sobrenome</strong>
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>
        </Link>

        <Link to="/news/slug">
          <h2>NEWS TITLE TITLE TITLE TITLE TITLE</h2>
          <div>
            <time dateTime="23/10/2020">23/10/2020</time>
            <strong>author sobrenome</strong>
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>
        </Link>

        <Link to="/news/slug">
          <h2>NEWS TITLE TITLE TITLE TITLE TITLE</h2>
          <div>
            <time dateTime="23/10/2020">23/10/2020</time>
            <strong>author sobrenome</strong>
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>
        </Link>

        <Link to="/news/slug">
          <h2>NEWS TITLE TITLE TITLE TITLE TITLE</h2>
          <div>
            <time dateTime="23/10/2020">23/10/2020</time>
            <strong>author sobrenome</strong>
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>
        </Link>

        <Link to="/news/slug">
          <h2>NEWS TITLE TITLE TITLE TITLE TITLE</h2>
          <div>
            <time dateTime="23/10/2020">23/10/2020</time>
            <strong>author sobrenome</strong>
          </div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>
        </Link>
      </NewsGrid>
    </Container>
  );
}

export default Home;
