import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    align-self: flex-end;
  }

  div:first-child {
    display: flex;
    justify-content: space-between;
    width: 100%;

    label {
      flex: 1;
      font-size: 1.8rem;
      & + label {
        margin-left: 10px;
      }
    }

    input {
      width: 100%;
      display: block;
      margin-top: 10px;
      border: none;
      height: 36px;
      padding: 10px;
      font-size: 1.6rem;
    }
  }

  div#news-content {
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;

    textarea {
      width: 50%;
      height: 100%;
      padding: 20px 10px;
      font-size: 1.6rem;
      border: none;
      resize: none;
      scrollbar-width: none;
    }

    div {
      padding: 20px;
      height: 100%;
      width: 50%;
      border-left: 1px solid black;
      overflow-y: scroll;
      overflow-x: hidden;
      word-wrap: break-word;
      scrollbar-width: none;
    }
  }
`;
