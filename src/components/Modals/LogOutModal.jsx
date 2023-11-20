import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';
import ThemeContext from '../../contexts/ThemeContext';
import AlertContext from '../../contexts/AlertContext';
import SessionContext from '../../contexts/SessionContext'

const LogOutModal = () => {
    const {showLogOut, handleLogOutModalClose} = useContext(ModalContext)

    const {theme} = useContext(ThemeContext)

    const {successToast} = useContext(AlertContext)

    const {connectSession} = useContext(SessionContext)

    const handleLogOut = () => {
        const isUserLoggedIn = false
        connectSession(isUserLoggedIn)
        successToast.fire({
            position: 'center',
            icon: 'success',
            title: '¡Hasta la próxima!'
        })
        handleLogOutModalClose()
        setTimeout(() => {
            window.location.reload();
        }, 3000); 
    }

    return (
        <Modal id="logOutModal" show={showLogOut} onHide={() => handleLogOutModalClose()}>
            <Modal.Header closeButton className={`bg-${theme}`}>
                <Modal.Title>Finalizar sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${theme}`}>
                ¿Estás seguro/a que querés finalizar tu sesión?
            </Modal.Body>
            <Modal.Footer className={`bg-${theme}`}>
                <Button variant="danger" onClick={() => handleLogOutModalClose()}>
                    Cancelar
                </Button>
                <Button variant="success" onClick={handleLogOut}>
                    Cerrar sesión
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LogOutModal