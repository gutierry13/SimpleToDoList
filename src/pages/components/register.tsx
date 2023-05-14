
import {Link} from 'react-router-dom'
import {RegisterContainer, RegisterForm} from '../styles/register'
import { Input } from './input-template'
import { SelectComponent } from './select-component'
import { CheckBox } from './checkbox'
import {BiArrowFromRight} from 'react-icons/bi'
export function Register () {

  return (
    <RegisterContainer>
      <div className="arrow">

      <Link to='/' style={{textDecoration: 'none',display: 'flex', alignItems: 'center', justifyContent: 'center'}}><BiArrowFromRight size={40} color='#00A551'/>
      <span>Go Back</span>
      
      </Link>
      </div>
      <div className="text">
        <h1>Welcome</h1>
        <p>Please fill out the form below to register your account </p>
      </div>
    <RegisterForm>
      <div className="name">
      <Input id='Fname' text='First Name' type='text'/>
      <Input id='Lname' text='Last Name' type='text'/>

      </div>
      <Input id='email' text='Email' type='email'/>
      <Input id='password' text='Password' type='password'/>
      <Input id='city' text='City' type='text'/>
      <Input id='birthday' text='Birthday' type='date'/>
      <SelectComponent/>
      <CheckBox/>
      <Link to='/'>
        <button>Register</button>
      </Link>
    </RegisterForm>
    </RegisterContainer>

  )
}