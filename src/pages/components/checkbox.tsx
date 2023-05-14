import { CheckBoxContainer, InputContainer } from "../styles/globalInputStyles"

export function CheckBox(){
  return (
    <InputContainer>
    <CheckBoxContainer>
    <input type="checkbox" name="terms" id="terms" />
    <label htmlFor="terms" >I agree to the terms and conditions</label>

    </CheckBoxContainer>
    </InputContainer>
  )
}