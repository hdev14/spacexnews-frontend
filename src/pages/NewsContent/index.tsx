import React from 'react';

import { Container } from './styles';

const NewsContent: React.FC = () => (
  <Container>
    <div id="header">
      <time dateTime="23/10/2020">23/10/2020</time>
      <strong>AUTHOR</strong>
      <h1>NEWS TITLE</h1>
    </div>

    <main>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita dolores, mollitia iusto vitae vel vero tempora placeat nobis quibusdam, dolorum quidem consequuntur odio ut velit? Quod ea numquam obcaecati!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita dolores, mollitia iusto vitae vel vero tempora placeat nobis quibusdam, dolorum quidem consequuntur odio ut velit? Quod ea numquam obcaecati!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita dolores, mollitia iusto vitae vel vero tempora placeat nobis quibusdam, dolorum quidem consequuntur odio ut velit? Quod ea numquam obcaecati!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita dolores, mollitia iusto vitae vel vero tempora placeat nobis quibusdam, dolorum quidem consequuntur odio ut velit? Quod ea numquam obcaecati!
      </p>

      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eMBPwZRLNjqwkSS4nBuD3gHaEJ%26pid%3DApi&f=1" alt="spacex"/>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita dolores, mollitia iusto vitae vel vero tempora placeat nobis quibusdam, dolorum quidem consequuntur odio ut velit? Quod ea numquam obcaecati!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita dolores, mollitia iusto vitae vel vero tempora placeat nobis quibusdam, dolorum quidem consequuntur odio ut velit? Quod ea numquam obcaecati!
      </p>
    </main>
  </Container>
);

export default NewsContent;
