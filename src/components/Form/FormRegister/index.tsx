import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Input";
import { registerSchema } from "./registerSchema";
import { ContextRegister } from "../../contexts/RegisterContext/RegisterContex";
import { ContainerTitle, ErrorForm } from "../styles";
import { ButtonGrey } from "../../../styles/button";

interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function FormRegister() {
  const { RegisterUser } = useContext(ContextRegister);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormData> = async (data) => {
    const formData = {
      name: data.name,
      password: data.password,
      email: data.email,
    };

    RegisterUser(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <ContainerTitle>
        <h2>Cadastro</h2>
        <Link to="/">Retornar para o login</Link>
      </ContainerTitle>

      <Input
        label="Nome"
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        register={register("name")}
      />
      {errors.name?.message && <ErrorForm>{errors.name.message}</ErrorForm>}

      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
      />
      {errors.email?.message && <ErrorForm>{errors.email.message}</ErrorForm>}

      <Input
        label="Senha"
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
      />
      {errors.password?.message && <ErrorForm>{errors.password.message}</ErrorForm>}

      <Input
        label="Confirmar Senha"
        type="password"
        id="ConfirmPassword"
        placeholder="Digite novamente sua senha"
        register={register("passwordConfirmation")}
      />
      {errors.passwordConfirmation?.message && (
        <ErrorForm>{errors.passwordConfirmation.message}</ErrorForm>
      )}

      <ButtonGrey type="submit">Cadastrar </ButtonGrey>
    </form>
  );
}

export default FormRegister;
