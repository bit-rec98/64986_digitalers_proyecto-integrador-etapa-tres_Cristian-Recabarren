import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react';
import ModalContext from '../../contexts/ModalContext';
import ThemeContext from '../../contexts/ThemeContext';
import SessionContext from '../../contexts/SessionContext';
import AlertContext from '../../contexts/AlertContext';
import { getItem } from '../../utils/http';
import PasswordVisibilityContext from '../../contexts/PasswordVisibilityContext';

const initialForm = {
    loginEmail: '',
    loginPassword: '',
    keepLogin: false
}

const LogInUpModal = () => {
    const {showLogInUp, handleLogInUpModalClose, handleRegisterModalOpen} = useContext(ModalContext)
    const {theme} = useContext(ThemeContext)
    const {connectSession, setShowEnabledButtons} = useContext(SessionContext)
    const {successToast, errorToast} = useContext(AlertContext)
    const {showLoginPassword, handleLoginPasswordVisibility} = useContext(PasswordVisibilityContext)

    const [form, setForm] = useState(initialForm)

    const handleClick = () => {
        const submitBtn = document.getElementById('submitLoginBtn')
        submitBtn.click()
        setShowEnabledButtons(true)
    }

    const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

    const urlUsersDb = import.meta.env.VITE_PORT_USERS;
    const handleUsersRegistered = async () => {
      try {
        const usersDb = await getItem(urlUsersDb)
        const user = usersDb.find((u) => u.userEmail.toLowerCase() === form.loginEmail.toLowerCase())
        if(user && comparePasswords(user.password, form.loginPassword)){
          const userConnected = true
          connectSession(userConnected)
          successToast.fire({
            icon: 'success',
            title: `¡Bienvenido/a!`
          });
        } else {
          const userConnected = false
          connectSession(userConnected)
          errorToast.fire({
            icon: 'error',
            title: '¡Usuario y/o contraseña incorrectos!'
          });
        }
      } catch (error) {
        console.error(`Error while checking login: ${error.message}`);
      }
    }

    const comparePasswords = (dbPassword, inputPassword) => {
      return dbPassword === inputPassword
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      handleUsersRegistered()
      handleReset()
      handleLogInUpModalClose()
    }

    const handleReset = () => {
        setForm(initialForm)
    }

    return (
      <Modal
        id="logInUpModal"
        show={showLogInUp}
        onHide={() => handleLogInUpModalClose()}
      >
        <Modal.Header closeButton className={`bg-${theme}`}>
          <Modal.Title>Iniciá sesión o registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`bg-${theme}`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="inputLoginUser" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="loginEmail"
                  className={`form-control`}
                  id="inputUserEmail"
                  aria-describedby="userHelp"
                  required
                  autoComplete="on"
                  onChange={handleChange}
                  value={form.email}
                />
            </div>
            <div className="mb-3 d-flex flex-column align-items-stretch justify-content-evenly">
              <label htmlFor="inputLoginPassword" className="form-label">
                Contraseña
              </label>
              <div className="d-flex flex-row align-items-center justify-content-evenly">
                <input
                  type="password"
                  name="loginPassword"
                  className={`form-control`}
                  id="inputLoginPassword"
                  aria-describedby="passwordHelp"
                  minLength="4"
                  maxLength="20"
                  required
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={form.loginPassword}
                />
                <span
                  className="material-symbols-sharp ms-2 d-block"
                  id="logInPasswordVisibility"
                  onClick={handleLoginPasswordVisibility}
                >
                  {showLoginPassword ? `visibility_off` : `visibility`}
                </span>
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="keepLogin"
                className={`form-check-input`}
                id="logCheckBox"
                onChange={handleChange}
                value={form.keepLogin}
              />
              <label className="form-check-label" htmlFor="logCheckBox">
                Mantener sesión iniciada
              </label>
            </div>
            <input className="d-none" type="submit" id="submitLoginBtn" />
          </form>
        </Modal.Body>
        <Modal.Footer
          className={`d-flex flex-row justify-content-between bg-${theme}`}
        >
          <Button id='registerUserBtn' onClick={() => handleRegisterModalOpen()}>
            Registrarse
          </Button>
          <div>
            <Button
              className="mx-1"
              variant="secondary"
              onClick={handleLogInUpModalClose}
            >
              Cancelar
            </Button>
            <Button className="mx-1" id='loginSessionBtn' onClick={handleClick}>
              Iniciar sesión
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
}

export default LogInUpModal