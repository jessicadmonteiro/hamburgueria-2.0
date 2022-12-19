import { createContext } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface iRegisterContextProps {
    children: React.ReactNode;
}

interface iRegisterContext {
    RegisterUser: (data: idata) => Promise<void>;
    loading: boolean;
}

interface idata{
    name: string;
    email: string;
    password: string;
}

export const ContextRegister = createContext({} as iRegisterContext)

export const AuthRegisterProvider = ({children}: iRegisterContextProps) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function RegisterUser(data:idata) {
        try {
          setLoading(true);
          await api.post("/users", data);

          navigate("/");
        } catch (error) {
    
          console.log(error)
        } finally {
          setLoading(false);
        }
    }
    return (
        <ContextRegister.Provider value={{RegisterUser, loading}}>
            {children}
        </ContextRegister.Provider>
    )
}
