import { Fieldset } from "./styles";
interface iInput {
    id: string;
    label: string;
    type: string;
    register: {};
}

function Input({id, label, type,  register}: iInput) {
  return (
    <Fieldset>
      <input type={type} {...register} required={true}/>
      <label htmlFor={id}>{label}</label>
    </Fieldset>
  )
}

export default Input
