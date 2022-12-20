import styled from "styled-components";
export const BackgroundHeader = styled.header`
  width: 100%;
  height: 70px;

  display: flex;

  background: #f5f5f5;
`;

export const HeaderStyle = styled.div`
  width: 78%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;

  span {
    width: 250px;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: #ffffff;

    padding: 0 10px;

    input {
      height: 80%;
      width: 80%;

      border: transparent;

      padding-left: 10px;
    }

    input::placeholder {
      font-size: 12px;

      color: #e0e0e0;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 729px) {
    span {
     display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  button {
    width: 15px;
    height: 15px;

    font-size: 10px;
    text-align: center;

    border: transparent;
    border-radius: 50%;
    color: #fff;
    background-color: #27ae60;

    margin-top: -12px;
    margin-left: -25px;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const GreenBall = styled.p`
  width: 15px;
  height: 15px;
  position: fixed;
  top: 15px;
  left: 85.5%;

  background: #27ae60;
  border-radius: 50%;
`;

export const LogoHeader = styled.img`
  @media (max-width: 729px) {
    width: 50%;
  }
`;
