import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  gap: 20px;

  margin: auto;
  margin-top: 10%;

  @media (max-width: 840px) {
    width: 90%;

    display: block;
  }
`;

export const ContainerForm = styled.div`
  width: 50%;

  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 20px;

  h2 {
    font-weight: 700;
    font-size: 18px;

    color: #333333;

    margin: 20px 0 10px 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  p {
    width: 65%;

    font-weight: 400;
    font-size: 14px;
    text-align: center;

    margin: 15px auto;
    margin-bottom: 25px;

    color: #999999;
  }


  @media (max-width: 840px) {
    width: 90%;
    margin: auto;
  }
`;

export const ContainerDiv = styled.div`
  width: 40%;

  @media (max-width: 840px) {
    width: 90%;
    margin: auto;
  }

  @media (max-width: 374px) {
    img{
      width: 40%;
    }
  }

`;

export const ContainerBagText = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin: 20px 0;
  padding: 20px;

  span {
    width: 90px;
    height: 45px;
    text-align: center;

    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;

    padding-top: 10px;
  }

  p {
    font-weight: 400;
    font-size: 14px;

    color: #828282;
  }

  @media (max-width: 374px) {
    
    p {
      font-size: 10px;
    }
  }
`;

export const ImgGroup = styled.img`
  @media (max-width: 840px) {
    display: none;
  }
`