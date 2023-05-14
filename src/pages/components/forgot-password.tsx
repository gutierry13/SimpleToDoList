import { ForgotPasswordContainer } from "../styles/forgotPassword";
import { Input } from "./input-template";
import {Link} from 'react-router-dom'
import {BiArrowFromRight} from 'react-icons/bi'


export function ForgotPassword () {
  return (
    <ForgotPasswordContainer>
        <div className="arrow">
      <Link to='/' style={{textDecoration: 'none',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <BiArrowFromRight size={40} color='#00A551'/>
      <span>Go Back</span>
      </Link>
      </div>
      <div className="text">
        <h1>Forgot Password</h1>
        <p> Enter your email address and we will send you a link to reset your password </p>
      </div>
      <Input id="email" type="email" text="Email" />
      <button>Send</button>
      <p>
        Already have an account?<Link to='/' style={{textDecoration: 'none'}}>{' '}Login</Link>
        </p>
    </ForgotPasswordContainer>
  )
}