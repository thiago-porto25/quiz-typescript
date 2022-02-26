import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-size: 100%;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: #fff;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
