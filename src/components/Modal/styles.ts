import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  background-color: white;
  max-width: 350px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;

  div.buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    button {
      border-color: black;
      color: black;
      padding: 10px 15px;
      z-index: 1;
      &:hover {
        color: white;

        ::before {
          background-color: black;
        }
      }
    }
  }
`;
