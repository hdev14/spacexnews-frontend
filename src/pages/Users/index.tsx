import React, { useEffect, useRef, useState } from 'react';

import httpClient from '../../http-client';
import Modal from '../../components/Modal/index';
import { ModalHandler } from '../../components/Modal/ModalHandler';

import { Container } from './styles';

type UserData = {
  _id: string,
  name: string,
  email: string
}

const Users: React.FC = () => {
  const modalNewUserRef = useRef<ModalHandler>(null);
  const modalEditUserRef = useRef<ModalHandler>(null);
  const modalDeleteUserRef = useRef<ModalHandler>(null);
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    (async function fetchUsers() {
      try {
        const response = await httpClient.get('/users');
        setUsers(response.data);
      } catch(err) {
        console.error(err)
      }
    })();
  }, []);

  function openModalNewUser() {
    modalNewUserRef.current && modalNewUserRef.current.toggleModal();
  }

  const openModalEditUser = (id: string) => () => {
    // select ID before call toggle
    modalEditUserRef.current && modalEditUserRef.current.toggleModal();
  }

  const openModalDeleteUser = (id: string) => () => {
    // select ID before call toggle
    modalDeleteUserRef.current && modalDeleteUserRef.current.toggleModal();
  }

  return (
    <Container>
      <div id="users-header">
        <h1>Usuários</h1>
        <button onClick={openModalNewUser}>novo usuário</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>nome</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
             <tr key={user._id}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={openModalEditUser(user._id)}>editar</button>
                <button onClick={openModalDeleteUser(user._id)}>excluir</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>Nome sobrenome</td>
            <td>nomesobrenome@email.com</td>
            <td>
              <button onClick={openModalEditUser('234')}>editar</button>
              <button onClick={openModalDeleteUser('1321')}>excluir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal ref={modalNewUserRef} confirm={() => {}} confirm_text="salvar">
        <h1>Novo o usuário.</h1>
      </Modal>

      <Modal ref={modalEditUserRef} confirm={() => {}} confirm_text="Atualizar">
        <h1>Atualizar o usuário.</h1>
      </Modal>

      <Modal ref={modalDeleteUserRef} confirm={() => {}} confirm_text="Sim. excluir">
        <h1>Excluir o usuário.</h1>
      </Modal>
    </Container>
  );
}

export default Users;
