import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 50px;

  div#users-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  table {
    margin-top: 30px;
    font-size: 1.6rem;
    width: 100%;
    border-collapse: collapse;

    td, th {
      text-align: center;
      padding: 10px 10px 20px;
    }

    tbody {
      td {
        font-size: 1.4rem;
        border-bottom: 1px solid;

        button {
          font-size: 1.2rem;
          padding: 5px 10px;

          & + button {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
