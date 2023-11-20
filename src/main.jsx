// Libraries
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as bootstrap from 'bootstrap'
import 'atropos/css'

// Styles
import './index.scss'

// Imports
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Admin from './pages/Admin'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Cart from './pages/Cart'
import { ProductsProvider } from './contexts/ProductsContexts'
import { ModalProvider } from './contexts/ModalContext'
import { CartProvider } from './contexts/CartContext'
import LogOutModal from './components/Modals/LogOutModal'
import LogInUpModal from './components/Modals/LogInUpModal'
import CartModal from './components/Modals/CartModal'
import RegisterModal from './components/Modals/RegisterModal'
import { ThemeProvider } from './contexts/ThemeContext'
import { SessionProvider } from './contexts/SessionContext'
import { AlertProvider } from './contexts/AlertContext'
import { PasswordVisibilityProvider } from './contexts/PasswordVisibilityContext'

// App
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>

      <AlertProvider>
      <SessionProvider>
      <ThemeProvider>
      <ModalProvider>
      <ProductsProvider>
      <CartProvider>

        <NavBar/>

        <PasswordVisibilityProvider>
        <LogInUpModal/>
        <RegisterModal/>
        <LogOutModal/>
        </PasswordVisibilityProvider>
        <CartModal/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

        <Footer/>
        
      </CartProvider>
      </ProductsProvider>
      </ModalProvider>
      </ThemeProvider>
      </SessionProvider>
      </AlertProvider>

    </BrowserRouter>
)


{/* <React.StrictMode>
</React.StrictMode>, */}