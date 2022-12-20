import Header from "../../components/Header";
import { Ul, Quest } from "./styles";
import { useContext } from "react";
import { ContexProducts } from "../../components/contexts/ProductsContext/ProductsContext";
import Cart from "../../components/Cart";
import { Navigate } from "react-router-dom";
import { ContextLogin } from "../../components/contexts/LoginContex/LoginContex";
import ImgSpinner from "../../assets/spinner.svg";
import { ContainerSpinner, Spinner } from "../../styles/spinner";

function Home() {
  const { productsFilter, search, setSearch, addItemToCart } =
    useContext(ContexProducts);
  const { loading } = useContext(ContextLogin);

  if (loading) {
    return (
      <ContainerSpinner>
        <Spinner src={ImgSpinner} alt="" />
      </ContainerSpinner>
    );
  }

  function removerSearch(setSearch: any) {
    setSearch("");
  }

  const token = window.localStorage.getItem("token");

  return token ? (
    <>
      <Header />
      <Cart />
      {search !== "" && (
        <Quest>
          <div>
            <h2>Resultados para:</h2>
            <span>{search}</span>
          </div>
          <button onClick={() => removerSearch(setSearch)}>Limpar busca</button>
        </Quest>
      )}
      <Ul>
        {productsFilter.map((item) => (
          <li key={item.id} id={String(item.id)}>
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p id={String(item.price)}>{item.category}</p>
            <h5>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </h5>
            <button onClick={() => addItemToCart(item)}>Adicionar</button>
          </li>
        ))}
      </Ul>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default Home;
