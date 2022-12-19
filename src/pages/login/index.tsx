import Logo from "../../assets/Logo.svg";
import Bag from "../../assets/Bag.svg";
import Group from "../../assets/Group 135.svg";
import FormLogin from "../../components/Form/FormLogin";
import {
  Container,
  ContainerBagText,
  ContainerDiv,
  ContainerForm,
  ImgGroup,
} from "../styles";
import { ButtonGrey } from "../../styles/button";
import { Link } from "react-router-dom";
import { ContainerMobileLogin, LogoLogin } from "../../components/Form/styles";

function Login() {
  return (
    <Container>
      <ContainerForm>
        <ContainerMobileLogin>
          <img src={Logo} alt="Logo" />
          <ContainerBagText>
            <span>
              <img src={Bag} alt="Bag" />
            </span>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <strong>melhores</strong> ingredientes.
            </p>
          </ContainerBagText>
        </ContainerMobileLogin>
        <FormLogin />
        <div>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <ButtonGrey>
            <Link to="register">Cadastrar</Link>
          </ButtonGrey>
        </div>
      </ContainerForm>
      <ContainerDiv>
        <LogoLogin>
          <img src={Logo} alt="Logo" />
          <ContainerBagText>
            <span>
              <img src={Bag} alt="Bag" />
            </span>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <strong>melhores</strong> ingredientes.
            </p>
          </ContainerBagText>
          <ImgGroup src={Group} alt="" />
        </LogoLogin>
      </ContainerDiv>
    </Container>
  );
}

export default Login;
