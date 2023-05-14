import {Routes,Route,useLocation} from 'react-router-dom'
import { Login } from '../pages/components/login'
import { Register } from '../pages/components/register'
import { ForgotPassword } from '../pages/components/forgot-password'
import { Home } from '../pages/components/home'
import { NotFound } from '../pages/components/notFound'
import {AnimatePresence} from 'framer-motion'
export function Router(){
  const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </AnimatePresence>
  )
}