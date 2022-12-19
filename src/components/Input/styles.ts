import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  border: none;


  label{
    width: 60px;
    font-weight: 400;
    font-size: 12px;
    

    color: #999999;
    background-color: #fff;
    
    padding: 10px;
    margin: 0 0 -15px 15px;


    z-index: 1;
  }

  input {
    width: 100%;
    height: 48px;

    border: 1px solid #999999;
    border-radius: 8px;

    padding-left: 20px;
    margin-bottom: 15px;
  }

  input:focus {
    border: 2px solid #168821;
  }


`;
