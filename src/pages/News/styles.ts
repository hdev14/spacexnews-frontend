import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px 50px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  button {
    align-self: flex-start;
    margin-bottom: 15px;
  }
`;

export const NewsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 2px;

  & > a {
    padding: 20px;
    position: relative;
    box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.9) inset;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 { text-shadow: 0 2px 3px rgba(0, 0, 0, 0.8); }

    div {
      margin-top: 10px;
      align-self: flex-end;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      strong {
        font-size: 1.4rem;
        margin-top: 5px;
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -1;
      filter: grayscale(.5);
      transition: filter .1s ease-out;
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }
`;
