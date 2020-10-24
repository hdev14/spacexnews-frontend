import React, { useEffect, useRef, useState, useMemo } from 'react';

import httpClient from '../../http-client';
import Modal from '../../components/Modal/index';
import { ModalHandler } from '../../components/Modal/ModalHandler';

import { Container } from './styles';

type UserData = {
  _id?: string,
  name: string,
  email: string
}

const Users: React.FC = () => {
  const modalNewUserRef = useRef<ModalHandler>(null);
  const modalEditUserRef = useRef<ModalHandler>(null);
  const modalDeleteUserRef = useRef<ModalHandler>(null);
  const [users, setUsers] = useState<UserData[]>([]);
  const [userEdit, setUserEdit] = useState<UserData>({ name: '', email: '' });
  const [userNew, setUserNew] = useState<UserData>({ name: '', email: '' });
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    (async function fetchUsers() {
      try {
        const response = await httpClient.get('/users');
        setUsers(response.data);
      } catch (err) {
        console.error(err)
      }
    })();
  }, []);

  const onChangeInput = (field: string, currentData: UserData, setFunc: any) => (e: any): void => {
    const { value } = e.target;
    setFunc({ ...currentData, [field]: value });
  }

  const onSubmitNew = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await httpClient.post<UserData>('/users', userNew);
      setUsers([...users, response.data]);
      modalNewUserRef.current?.toggleModal();
    } catch (err) {
      console.error(err);
    }
  }

  const onSubmitEdit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await httpClient.put(`/users/${userEdit._id}`, {
        name: userEdit.name,
        email: userEdit.email
      });
      const userIndex = users.findIndex(u => u._id === userEdit._id);
      users[userIndex] = userEdit;
      setUsers([...users]);
      modalEditUserRef.current?.toggleModal();
    } catch (err) {
      console.error(err)
    }
  }

  const deleteUser = async () => {
    try {
      await httpClient.delete(`/users/${deleteId}`);
      const newUsers = users.filter(u => u._id !== deleteId);
      setUsers([...newUsers]);
      modalDeleteUserRef.current?.toggleModal();
    } catch (err) {
      console.error(err);
    }
  }

  const findUserById = useMemo(() => {
    return (id: string): UserData | undefined => {
      return users.find(u => u._id === id)
    }
  }, [users]);

  const openModalNewUser = () => {
    modalNewUserRef.current?.toggleModal();
  }

  const openModalEditUser = (id?: string) => () => {
    const user = findUserById(id || '');
    if (user) {
      setUserEdit(user);
      modalEditUserRef.current?.toggleModal();
    }
  }

  const openModalDeleteUser = (id?: string) => () => {
    const user = findUserById(id || '');
    if (user && user._id) {
      setDeleteId(user._id)
      modalDeleteUserRef.current?.toggleModal();
    }
  }

  return (
    <Container>
      <div id="users-header">
        <h1>Usuários</h1>
        <button onClick={openModalNewUser}>novo usuário</button>
      </div>

      <table>
        {users.length > 0 ? (
          <>
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
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td> Sem usuários cadastrados. </td>
            </tr>
          </tbody>
        )}
      </table>

      <Modal ref={modalNewUserRef} confirm={onSubmitNew} confirm_text="salvar">
        <form>
          <label htmlFor="new_name">
            Nome
            <input
              type="text"
              name="new_name"
              placeholder="Digite o nome do usuário"
              value={userNew.name}
              onChange={onChangeInput('name', userNew, setUserNew)} />
          </label>

          <label htmlFor="new_name">
            Email
            <input
              type="text"
              name="new_name"
              placeholder="Digite o email do usuário"
              value={userNew.email}
              onChange={onChangeInput('email', userNew, setUserNew)} />
          </label>
        </form>
      </Modal>

      <Modal ref={modalEditUserRef} confirm={onSubmitEdit} confirm_text="Atualizar">
        <form>
          <label htmlFor="edit_name">
            Nome
            <input
              type="text"
              name="edit_name"
              placeholder="Digite o nome do usuário"
              value={userEdit.name}
              onChange={onChangeInput('name', userEdit, setUserEdit)} />
          </label>

          <label htmlFor="edit_name">
            Email
            <input
              type="text"
              name="edit_name"
              placeholder="Digite o email do usuário"
              value={userEdit.email}
              onChange={onChangeInput('email', userEdit, setUserEdit)} />
          </label>
        </form>
      </Modal>

      <Modal ref={modalDeleteUserRef} confirm={deleteUser} confirm_text="Sim. excluir">
        <p>Tem certeza que você deseja excluir esse usuário?</p>
      </Modal>
    </Container>
  );
}

export default Users;
