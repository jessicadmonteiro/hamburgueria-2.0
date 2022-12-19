import Header from "../../components/Header";
import { Ul, Quest } from "./styles";
import { useContext} from "react";
import { ContexProducts } from "../../components/contexts/ProductsContext/ProductsContext";
import Cart from "../../components/Cart";

function Home() {
  
  const { productsFilter, search, setSearch, addItemToCart } = useContext(ContexProducts);


  function removerSearch (setSearch: any) {
    setSearch("")
  }

  return (
    <>
      <Header />
      <Cart />
      {search !== "" && (
        <Quest>
          <div>
          <h2>Resultados para:</h2>
          <span>{search}</span>
          </div>
          <button onClick={() => removerSearch (setSearch)}>Limpar busca</button>
        </Quest>
      )}
      <Ul>
        {productsFilter.map((item) => (
          <li key={item.id} id={String(item.id)} >
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
  );
}

export default Home;
