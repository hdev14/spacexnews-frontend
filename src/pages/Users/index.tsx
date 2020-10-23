import React, { useRef } from 'react';

import Modal from '../../components/Modal/index';
import { ModalHandler } from '../../components/Modal/ModalHandler';

import { Container } from './styles';

const Users: React.FC = () => {
  const modalNewUserRef = useRef<ModalHandler>(null);
  const modalDeleteUserRef = useRef<ModalHandler>(null);

  function openModalNewUser() {
    modalNewUserRef.current && modalNewUserRef.current.toggleModal();
  }

  function openModalDeleteUser() {
    // select ID before call toggle
    modalDeleteUserRef.current && modalDeleteUserRef.current.toggleModal();
  }

  return (
    <Container>
      <div id="users-header">
        <h1>Usuários</h1>
        <button>novo usuário</button>
      </div>

      <table>
        <thead>
          <th>#</th>
          <th>nome</th>
          <th>email</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nome sobrenome</td>
            <td>nomesobrenome@email.com</td>
            <td>
              <button>editar</button>
              <button className="delete">excluir</button>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Nome sobrenome</td>
            <td>nomesobrenome@email.com</td>
            <td>
              <button>editar</button>
              <button>excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal ref={modalNewUserRef} confirm={() => {}} confirm_text="salvar">
        <h1>Novo o usuário.</h1>
      </Modal>

      <Modal ref={modalDeleteUserRef} confirm={() => {}} confirm_text="Sim. excluir">
        <h1>Excluir o usuário.</h1>
      </Modal>
    </Container>
  );
}

export default Users;
