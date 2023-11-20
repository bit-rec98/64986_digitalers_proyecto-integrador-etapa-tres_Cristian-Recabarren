import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext'

const Footer = () => {

    const {theme} = useContext(ThemeContext)

  return (
        <footer
        className={`container-fluid footerClass px-3 py-3 d-flex flex-row align-items-center justify-content-between flex-wrap bg-${theme}`}
        id="footerId"
        >
            <div className="container-fluid px-5 d-flex flex-row justify-content-evenly  flex-wrap">
                <h5 className="footerItem my-0 mt-4 mb-4">
                Córdoba Capital, Córdoba. Argentina
                </h5>
                <p className="footerItem my-0 mt-4 mb-4">
                ©LTH Store | Todos los derechos reservados
                </p>
            </div>
            <div className="container-fluid callToActionFooter">
                <ul className="d-flex flex-row align-items-center flex-wrap justify-content-evenly my-0 px-0 list-unstyled">
                    <li className="p-1 mx-0">
                        <a
                        className="p-3 footerItem nav-link"
                        href="https://www.andreani.com/#!/personas"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Seguí tu pedido
                        </a>
                    </li>
                    <li className="p-1 mx-0">
                        <NavLink
                        className="p-3 footerItem nav-link"
                        to="/contact"
                        rel="noreferrer"
                        >
                        ¡Contactanos!
                        </NavLink>
                    </li>
                    <li className="p-1 mx-0">
                        <a
                        className="p-3 footerItem nav-link"
                        href="https://www.instagram.com/lth.mining/"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer