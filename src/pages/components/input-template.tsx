import { InputContainer } from "../styles/globalInputStyles"

interface inputProps{
  id:string,
  text:string,
  type:string
}

export function Input({id,text,type}:inputProps){
  return (
    <InputContainer>
      <label htmlFor={id}>{text}</label>
      <input type={type} name={id} id={id} />
    </InputContainer>
  )
}