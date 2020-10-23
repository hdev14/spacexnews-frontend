import styled from 'styled-components';

export const Container = styled.div`

  header {
    width: 100vw;
    display: grid;
    place-items: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, .3);
    position: sticky;
    top: 0;
    left: 0;

    img {
      height: 50px;
      width: auto;
    }
  }

  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-top: 50px;

    small {
      font-size: 1.2rem;
    }
  }
`;
