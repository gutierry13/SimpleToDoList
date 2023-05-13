import {Routes,Route} from 'react-router-dom'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { ForgotPassword } from '../pages/forgot-password'
import { Home } from '../pages/home'
export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}