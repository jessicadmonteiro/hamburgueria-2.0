import { createContext, useState } from "react";
import { api } from "../../../services/api";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

interface iLoginContextProps {
  children: React.ReactNode;
}

interface iUser {
  id: string;
  name: string;
  email: string;
}

interface iLoginContext {
  LoginUser: (data: idata) => Promise<void>;
  user: null | iUser[];
}

interface idata {
  email: string;
  password: string;
}

export const ContextLogin = createContext({} as iLoginContext);

export const AuthLoginProvider = ({ children }: iLoginContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  async function LoginUser(data: idata) {
    try {
      const response = await api.post("/login ", data);
      window.localStorage.clear();
      window.localStorage.setItem("token", response.data.accessToken);

      setUser(response.data.user);


      navigate("/home");
      
    } catch (error) {
      toast.error("Ops! Algo deu errado")
    }
  }
  return (
    <ContextLogin.Provider value={{ LoginUser, user }}>
      {children}
    </ContextLogin.Provider>
  );
};
