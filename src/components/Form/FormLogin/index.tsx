import Input from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { ContextLogin } from "../../contexts/LoginContex/LoginContex";
import { ButtonGreen } from "../../../styles/button";
import { ErrorForm } from "../styles";


interface iLoginFormData {
  email: string;
  password: string;
}

function FormLogin() {
  const { LoginUser } = useContext(ContextLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormData> = async (data) => {
    await LoginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input
        label="Email"
        type="email"
        id="email"
        register={register("email")}
      />

      {errors.email?.message && <ErrorForm>{errors.email.message}</ErrorForm>}
      <Input
        label="Senha"
        type="password"
        id="password"
        register={register("password")}
      />
      {errors.password?.message && <ErrorForm>{errors.password.message}</ErrorForm>}

      <ButtonGreen>Logar</ButtonGreen>
    </form>
  );
}

export default FormLogin;
