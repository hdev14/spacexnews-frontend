import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  padding: 0 50px;

  div#header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;

    h1 {
      font-size: 4rem;
    }

    strong {
      color: #e2e2e2;
      font-size: 1.6rem;
      margin-right: 20px;
    }

    time {
      margin-bottom: 2.5px;
      color: #e2e2e2;
    }
  }

  main {
    padding: 0 30px;

    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
      margin: 30px 0;
    }

    p {
      text-transform: initial;
      font-size: 1.8rem;
      margin-bottom: 20px;
      line-height: 2.8rem;
    }
  }
`;
