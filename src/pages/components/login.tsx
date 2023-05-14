import { FormContainer, LoginContainer } from "../styles/login";
import {Link} from 'react-router-dom'
import image from '../../assets/Image.png'
import {motion} from 'framer-motion'
import { Input } from "./input-template";
export function Login () {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <LoginContainer>
      <img src={image} alt="login custom image" />
      <div className="login-form">
        <div className="text">
          <h1>Login</h1>
          <p>Please enter your email and password</p>
        </div>
        <div className="form">
          <FormContainer >
            <Input type="text" id="email" text="Email"/>
            <Input type="password" id="password" text="Password"/>
            <Link to='/home'>
            <button>Login</button>
            </Link>
          </FormContainer>
        </div>
        <footer>
          <p>Don't have an account? <Link to='/register' style={{textDecoration: 'none'}}>
            <span>Sign up</span></Link></p>
          <Link to='/forgot-password' style={{textDecoration: 'none'}}>
            <span>Forgot password?</span>
           
            </Link>
        </footer>
      </div>
    </LoginContainer>
    </motion.div>
  )
}