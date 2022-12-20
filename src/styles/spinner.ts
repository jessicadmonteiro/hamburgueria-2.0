import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const ContainerSpinner = styled.div`
  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;

  margin: 10% auto 0 auto;

  background-color: #eb5757;
  border-radius: 50%;

  @media (max-width: 729px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 379px) {
    width: 50px;
    height: 50px;
  }
`;

export const Spinner = styled.img`
  width: 100px;
  height: 100px;

  margin: auto;

  animation: ${animation} 1s infinite linear;

  @media (max-width: 729px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 379px) {
    width: 20px;
    height: 20px;
  }
`;
