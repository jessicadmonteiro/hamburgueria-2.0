import styled from "styled-components";

export const Ul = styled.ul`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin: auto;
  padding: 20px 0 0 10px;
 
  li {
    width: 250px;
    height: 300px;

    border: 2px solid #e0e0e0;
    border-radius: 5px;

    div {
      width: 250px;
      max-width: 100%;
      height: 50%;

      display: flex;
      justify-content: center;

      background: #f5f5f5;
    }

    h3 {
      font-weight: 700;
      font-size: 18px;

      color: #333333;

      padding: 10px 20px;
    }

    p {
      font-size: 12px;

      color: #828282;

      padding: 0 0 10px 20px;
    }

    h5 {
      font-size: 14px;

      color: #27ae60;

      padding-left: 20px;
    }

    button {
      width: 45%;
      height: 40px;

      color: #FFFFFF;
      background: #BDBDBD;

      border: 2px solid #BDBDBD;
      border-radius: 8px;

      margin: 10px 20px;
    }

    button:hover {
      color: #ffffff;
      background: #27ae60;

      border: 2px solid #27ae60;
    }
  }

  li:hover {
    border: 2px solid #27ae60;
    border-radius: 5px;
  }

  @media (max-width: 729px){
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 10px;

    overflow-x: auto;

    li {
      
      h3{
        font-size: 12px;
      }

      p {
        font-size: 10px;
      }
    }
    
  }
`;

export const DivContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Quest = styled.div`
  width: 78%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: auto;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  h2 {
    font-size: 26px;
    color: #333333;
  }

  span {
    font-size: 26px;
    color: #828282;
  }

  button {
    width: 137px;
    height: 40px;

    color: #ffffff;
    background: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;
  }
`