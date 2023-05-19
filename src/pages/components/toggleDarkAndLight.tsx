import { InputContainerDarkAndLight } from "../styles/darkAndLightButton";

export function ToggleDarkAndLightButton(){
  return (
  <InputContainerDarkAndLight className="toggle">
  <input id="switch" type="checkbox" name="theme"/>
  <label htmlFor="switch">Toggle</label>
  </InputContainerDarkAndLight>
)
}