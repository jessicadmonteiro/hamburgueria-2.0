import Trash from "../../assets/Trash.svg";
import { useContext} from "react";
import { ContexProducts } from "../contexts/ProductsContext/ProductsContext";
import {
  BackgroundModal,
  Container,
  ContainerCout,
  ContainerModal,
  ContainerTotal,
  ImgTrash,
  TitleModal,
  Button,
  EmptyBag,
} from "./styles";

function Cart() {
  const { cart, setCart, valueTotal, modalOpen, setModalOpen, removeCart, RemoverAll, IncrementCount, DecrementCount } = useContext(ContexProducts);

  if (!modalOpen) return null;

  return (
    <BackgroundModal>
      <ContainerModal>
        <TitleModal>
          <h2>Carrinho de compras</h2>
          <button type="button" onClick={() => setModalOpen(false)}>
            X
          </button>
        </TitleModal>
        <section>
          {cart.length === 0 && (
            <>
              <EmptyBag>
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
              </EmptyBag>
            </>
          )}
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <Container>
                  <span>
                    <img src={item.img} alt={item.name} />
                  </span>
                  <div>
                    <h3>{item.name}</h3>
                    <ContainerCout>
                      <button onClick={() => DecrementCount(item)}>-</button>
                      <p>{item.count}</p>
                      <button onClick={() => IncrementCount(item)}>+</button>
                    </ContainerCout>
                  </div>
                </Container>
                <ImgTrash
                  onClick={() => removeCart(item.id)}
                  src={Trash}
                  alt="Trash"
                />
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <div>
              <ContainerTotal>
                <h4>Total</h4>
                <h3>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(valueTotal)}
                </h3>
              </ContainerTotal>
              <Button onClick={() => RemoverAll(setCart)}>Remover Todos</Button>
            </div>
          )}
        </section>
      </ContainerModal>
    </BackgroundModal>
  );
}
export default Cart;
