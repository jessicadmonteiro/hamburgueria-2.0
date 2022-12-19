import { Fieldset } from "./styles";
interface iInput {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    register: {};
}

function Input({id, label, type, placeholder, register}: iInput) {
  return (
    <Fieldset>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
    </Fieldset>
  )
}

export default Input
