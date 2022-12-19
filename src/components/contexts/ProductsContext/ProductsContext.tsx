import { createContext, useEffect, useState } from "react";
import { api } from "../../../services/api";

interface iProductsContextProps {
  children: React.ReactNode;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count: number;
}

interface iCart {
  id: number;
  name: string;
  img: string;
  price: number;
  count: number;
}

interface iProductsContext {
  products: iProducts[];
  productsFilter: iProducts[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  cart: iCart[];
  setCart: React.Dispatch<React.SetStateAction<iCart[]>>;
  addItemToCart({ id, img, name, price, count }: iCart): void;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  removeCart(itemId: number): void;
  RemoverAll(setCart: any): void;
  IncrementCount(productId: any): void;
  DecrementCount(productId: any): void;
  valueTotal: number;
  loading: any;
}

export const ContexProducts = createContext({} as iProductsContext);

export const AuthProductsProvider = ({ children }: iProductsContextProps) => {
  const [products, setProducts] = useState<iProducts[]>([] as iProducts[]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<iCart[]>([] as iCart[]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const productsFilter = products.filter(
    (item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase()) ||
      item.category.toLowerCase().startsWith(search.toLowerCase())
  );

  useEffect(() => {
    async function getProducts() {
      const token = window.localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);

      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  function addItemToCart({ id, img, name, price, count }: iCart) {
    const objectItem = { id, img, name, price, count: 1 };

    let arr = cart.find((element) => element.id === objectItem.id);

    if (arr === undefined) {
      setCart([...cart, objectItem]);
    }
  }

  function removeCart(itemId: number) {
    const filter = cart.filter((item) => item.id !== itemId);
    setCart(filter);
  }

  const valueTotal = cart.reduce(
    (accumulator: number, currentValue) =>
      accumulator + currentValue.price * currentValue.count,
    0
  );

  function RemoverAll(setCart: any) {
    setCart([]);
  }

  function IncrementCount(product: iCart) {
    const updatedArray = cart.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedArray);

    console.log(updatedArray);
  }

  function DecrementCount(product: iCart) {
    if (product.count <= 1) {
      removeCart(product.id);
    } else {
      const updatedArray = cart.map((item) =>
        item.id === product.id ? { ...item, count: item.count - 1 } : item
      );
      setCart(updatedArray);
    }
  }

  return (
    <ContexProducts.Provider
      value={{
        products,
        productsFilter,
        search,
        setSearch,
        cart,
        setCart,
        addItemToCart,
        modalOpen,
        setModalOpen,
        removeCart,
        valueTotal,
        RemoverAll,
        IncrementCount,
        DecrementCount,
        loading,
      }}
    >
      {children}
    </ContexProducts.Provider>
  );
};
