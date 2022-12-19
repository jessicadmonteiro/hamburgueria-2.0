import Logo from "../../assets/Logo.svg";
import Search from "../../assets/Search.svg";
import Cart from "../../assets/Cart.svg";
import Logout from "../../assets/Logout.svg";
import { BackgroundHeader, Container, HeaderStyle, Img, LogoHeader } from "./styles";
import { useContext } from "react";
import { ContexProducts } from "../contexts/ProductsContext/ProductsContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { search, setSearch, setModalOpen,cart} = useContext(ContexProducts);
  const navigate = useNavigate();

  function LogoutUser () {
    navigate("/");
    window.localStorage.clear();
  }

  return (
    <BackgroundHeader>
      <HeaderStyle>
        <div>
          <LogoHeader src={Logo} alt="Logo" />
        </div>
        <Container>
          <span>
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={Search} alt="Search" />
          </span>
          <Img onClick={() =>{setModalOpen(true)}} src={Cart} alt="Cart" />
          <button onClick={() =>{setModalOpen(true)}} >{cart.length}</button>
          <Img onClick={()=> LogoutUser()} src={Logout} alt="Logout" />
        </Container>
      </HeaderStyle>
    </BackgroundHeader>
  );
}

export default Header;
