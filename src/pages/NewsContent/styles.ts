import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 50px;

  div#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    div#left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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

    div#right {
      button {
        padding: 10px 20px;
        z-index: 1;

        & + button {
          margin-left: 10px;
        }
      }
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
      color: #f2f2f2;
    }
  }
`;
