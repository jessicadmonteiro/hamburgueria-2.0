import { createContext, useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iLoginContextProps {
  children: React.ReactNode;
}

interface iLoginContext {
  LoginUser: (data: idata) => Promise<void>;
  products: iProducts[];
  loading: boolean;
}

interface idata {
  email: string;
  password: string;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count: number;
}

export const ContextLogin = createContext({} as iLoginContext);

export const AuthLoginProvider = ({ children }: iLoginContextProps) => {
  const [products, setProducts] = useState<iProducts[]>([] as iProducts[]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function LoginUser(data: idata) {
    try {
      const response = await api.post("/login ", data);
      window.localStorage.clear();
      window.localStorage.setItem("token", response.data.accessToken);

      GetProducts();
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  }

  async function GetProducts() {
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
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin(): Promise<void> {
      const token = window.localStorage.getItem("token");

      if (token) {
        GetProducts();
        // navigate("/home");
      }
      
    }
    autoLogin();
  }, []);

  return (
    <ContextLogin.Provider value={{ LoginUser, products, loading }}>
      {children}
    </ContextLogin.Provider>
  );
};
