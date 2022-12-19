import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 500;
    font-size: 14px;

    color: #828282;
  }

  @media (max-width: 374px) {
    flex-direction: column;
  }
`;

export const ErrorForm = styled.span`
  font-size: 12px;

  color: #eb5757;

  margin-bottom: 10px;
`

export const LogoLogin = styled.div`
  @media (max-width: 840px){
    display: none;
  }

`
export const ContainerMobileLogin = styled.div`

  @media (max-width: 840px){
    display: columns;
  }

  @media (min-width: 841px){
    display: none;
  }

  @media (max-width: 430px) {
    
    img {
      width: 30%;
    }

    p {
      font-size: 10px;
    }
  }
`