import styled from "styled-components";

export const Fieldset = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;

  border: none;


  label{
    position: absolute;
    bottom: 33px;
    left: 20px;
    height: 15px;
    
    font-weight: 400;
    font-size: 12px;
    

    color: #999999;
    background-color: #fff;
    
    margin: 0px;
    padding: 0px;
    
  }

  input {
    width: 100%;
    height: 48px;

    border: 1px solid #999999;
    border-radius: 8px;

    padding-left: 20px;
    margin-bottom: 15px;

    :valid~label,
    :focus~label {
      top: -6px;
    }
  }

`;
