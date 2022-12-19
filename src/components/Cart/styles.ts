import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 800px;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;

  background: rgba(18, 18, 20, 0.5);
`;

export const ContainerModal = styled.div`
  width: 30%;

  position: absolute;
  top: 11%;
  left: 35%;

  background: #ffffff;

  border-radius: 5px;

  ul {
    max-height: 300px;

    overflow-y: auto;
  }

  li {
    width: 90%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 1px #e0e0e0;

    margin: 20px auto;
  }

  @media (max-width: 800px) {
    width: 50%;
    left: 25%;
  }

  @media (max-width: 425px) {
    width: 90%;
    left: 5%;
  }
`;

export const TitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #27ae60;
  border-radius: 5px 5px 0px 0px;

  padding: 20px;

  h2 {
    font-weight: 700;
    font-size: 18px;

    color: #ffffff;
  }

  button {
    color: rgba(255, 255, 255, 0.5);
    background-color: transparent;

    border: transparent;
  }

  @media (max-width: 460px) {
    h2 {
      font-size: 12px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 50px;
  }

  h3 {
    font-weight: 700;
    font-size: 15px;

    color: #333333;

    margin-bottom: 15px;
  }

  span {
    width: 70px;

    text-align: center;

    background: #e0e0e0;
    border-radius: 5px;
  }

  @media (max-width: 452px) {
    h3 {
      font-size: 10px;
    }

    span {
      width: 50px;

      img {
        width: 90%;
      }
    }
  }
`;

export const ContainerCout = styled.div`
  display: flex;

  p {
    width: 30px;
    height: 20px;

    font-weight: 400;
    font-size: 12px;

    text-align: center;

    border: 2px solid #f2f2f2;
  }

  button {
    width: 30px;
    height: 20px;

    color: #eb5757;

    border: transparent;
  }

  @media (max-width: 452px) {
    p {
      width: 20px;

      font-size: 10px;
      padding-top: 2px;
    }

    button {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ImgItem = styled.img`
  background: rgba(255, 255, 255, 0.5);
`;

export const ImgTrash = styled.img`
  width: 13px;

  padding-bottom: 20px;

  cursor: pointer;

  @media (max-width: 452px) {
    width: 10px;
    padding-bottom: 30px;
  }
`;

export const ContainerTotal = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px auto;

  h4 {
    font-weight: 600;
    font-size: 14px;

    color: #333333;
  }

  h3 {
    font-weight: 600;
    font-size: 14px;

    color: #828282;
  }

  @media (max-width: 452px) {
    h4,
    h3 {
      font-size: 10px;
    }
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 50px;

  color: #828282;

  border-radius: 8px;
  border: transparent;

  margin: 20px;

  @media(max-width: 452px) {
    font-size: 12px;

    margin-left: 9px;
  }
`;

export const EmptyBag = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  h3 {
    font-size: 18px;
    color: #333333;
    margin-top: 30px;
  }

  p {
    font-size: 14px;
    color: #828282;
  }

  @media(max-width: 452px) {
    h3{
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }
  }
`;

