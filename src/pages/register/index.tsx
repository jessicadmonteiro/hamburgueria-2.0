import Logo from "../../assets/Logo.svg";
import Bag from "../../assets/Bag.svg";
import Group from "../../assets/Group 135.svg";
import FormRegister from "../../components/Form/FormRegister";
import {
  Container,
  ContainerBagText,
  ContainerDiv,
  ContainerForm,
  ImgGroup,
} from "../styles";

function Register() {
  return (
    <Container>
      <ContainerDiv>
        <div>
          <img src={Logo} alt="Logo" />
          <ContainerBagText>
            <span>
              <img src={Bag} alt="Bag" />
            </span>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os 
              <strong> melhores</strong> ingredientes.
            </p>
          </ContainerBagText>
          <ImgGroup src={Group} alt="" />
        </div>
      </ContainerDiv>
      <ContainerForm>
        <FormRegister />
      </ContainerForm>
    </Container>
  );
}

export default Register;
