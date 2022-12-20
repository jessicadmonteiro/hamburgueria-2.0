import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonGreen = styled.button`
  height: 48px;

  color: #ffffff;
  background: #219653;
  border-radius: 8px;
  border: transparent;
`;

export const ButtonGrey = styled.button`
  width: 100%;
  height: 48px;

  color: #999999;
  background: #f5f5f5;

  border-radius: 8px;
  border: transparent;

  margin-top: 10px;
`;

export const ButtonLink = styled(Link)`
  font-size: 13px;

  color: #999999;
  background: #f5f5f5;

  border-radius: 8px;
  border: transparent;

  padding: 16px 41%;

  text-decoration: none;

  @media (max-width: 840px) {
    padding: 16px 45%;
  }

  @media (max-width: 640px) {
    padding: 16px 42%;
  }

  @media (max-width: 415px){
    padding: 16px 40%;
  }

  @media (max-width: 350px){
    padding: 16px 36%;
  }
  
`;

