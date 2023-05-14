import { Router } from "./routes/Router"
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from "./global-styles"

function App() {

  return (    
    <BrowserRouter>
      <Router/>
    <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App
