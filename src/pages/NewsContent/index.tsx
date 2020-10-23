import React, { useRef } from 'react';

import Modal from '../../components/Modal/index'
import { ModalHandler } from '../../components/Modal/ModalHandler'
import { Container } from './styles';

const NewsContent: React.FC = () => {
  const modalRef = useRef<ModalHandler>(null);

  function openModal() {
    if (modalRef.current) {
      modalRef.current.toggleModal()
    }
  }

  return (
    <Container>
      <div id="header">
        <div id="left">
          <time dateTime="23/10/2020">23/10/2020</time>
          <strong>AUTHOR</strong>
          <h1>NEWS TITLE</h1>
        </div>

        <div id="right">
          <button>editar</button>
          <button className="delete" type="button" onClick={openModal}>excluir</button>
        </div>
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

      <Modal ref={modalRef} confirm={() => {}} confirm_text="asdfsd">
        <h1>asdf</h1>
        <h2>NEWS TITLE TITLE TITLE TITLE TITLE</h2>
          <div>
            <time dateTime="23/10/2020">23/10/2020</time>
            <strong>author sobrenome</strong>
          </div>
      </Modal>
    </Container>
  );
}
export default NewsContent;
