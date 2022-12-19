import { createContext } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

interface iLoginContextProps {
  children: React.ReactNode;
}

interface iLoginContext {
  LoginUser: (data: idata) => Promise<void>;
}

interface idata {
  email: string;
  password: string;
}

export const ContextLogin = createContext({} as iLoginContext);

export const AuthLoginProvider = ({ children }: iLoginContextProps) => {
  const navigate = useNavigate();

  async function LoginUser(data: idata) {
    try {
      const response = await api.post("/login ", data);
        console.log(response)
      window.localStorage.clear();
      window.localStorage.setItem("token", response.data.accessToken);

      navigate("/home");
      
    } catch (error) {}
  }
  return (
    <ContextLogin.Provider value={{ LoginUser }}>
      {children}
    </ContextLogin.Provider>
  );
};
