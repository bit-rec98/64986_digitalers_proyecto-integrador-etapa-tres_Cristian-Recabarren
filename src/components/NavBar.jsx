
import {Link, NavLink} from 'react-router-dom'
import LogInUpBtn from './Buttons/LogInUpBtn'
import LogOutBtn from './Buttons/LogOutBtn'
import CartListBtn from './Buttons/CartListBtn'
import { useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext'
import SessionContext from '../contexts/SessionContext'

const NavBar = () => {

    const {theme, handleTheme} = useContext(ThemeContext)
    const {showEnabledButtons} = useContext(SessionContext)
    
  return (
        <header className='mb-5 sticky-top'>
            <nav className={`navbar navbar-expand-lg bg-${theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to='/' rel="prefetch">
                        <img src="/img/logoLightMode.png" alt="logo" id="logoImg" loading="lazy"/> {/* src="/img/logoLightMode.png" */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                            <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center flex-wrap me-auto">
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link navItem" aria-current="page" to='/' rel="prefetch">Inicio</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link navItem" aria-current="page" to='/products' rel="prefetch">Productos</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link navItem" to='/contact' rel="prefetch">Nosotros</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link navItem" to='/about' rel="prefetch">¿Iniciando en la minería?</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    {showEnabledButtons && <NavLink className="nav-link navItem" id='adminSection' to='/admin' rel="prefetch">Administración</NavLink>}
                                </li>
                            </ul>
                            <div className='d-flex flex-row justify-content-evenly align-items-center flex-wrap'>
                                <div className="login mx-2" id="log">
                                    <LogInUpBtn/>
                                    <LogOutBtn/>
                                </div>
                                <div className="cart mx-2 d-flex flex-row align-items-center">
                                    <CartListBtn id='cartListBtn'/>
                                </div>
                                <div className="togglerMode d-flex flex-row mx-2 p-0">
                                    <button className="material-symbols-sharp d-block navItem mx-1 p-2" id="themeModeBtn" onClick={handleTheme}>
                                        {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar








