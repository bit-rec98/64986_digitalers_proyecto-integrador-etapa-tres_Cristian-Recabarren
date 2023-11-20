import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalContext from '../../contexts/ModalContext'
import Cartcontext from '../../contexts/CartContext'
import { Button, Modal } from 'react-bootstrap'
import CartListProductItem from '../Products/ProductsListItem'
import ThemeContext from '../../contexts/ThemeContext'
import AlertContext from '../../contexts/AlertContext'

const CartModal = () => {

    const {errorToast} = useContext(AlertContext)

    const {cart, emptyCartContext} = useContext(Cartcontext) 
    const navigate = useNavigate()

    const handleBuy = () => {
        if(cart.length !== 0){
            navigate('./cart')
            handleCartListModalClose()
        } else {
            // Agregar Swal acá con set time out
            alert('No hay productos agregados')
        }
    }

    const handleEmptyCart = () => {
        if(cart.length === 0){
            errorToast.fire({
                icon: 'error',
                title: '¡El carro ya está vacío!'
            });
            handleCartListModalClose()
        } else {
            emptyCartContext()
            handleCartListModalClose()
        }
    }

    const {showCartList, handleCartListModalClose} = useContext(ModalContext)

    const {theme} = useContext(ThemeContext)

    return (
        <Modal size='lg' show={showCartList} onHide={handleCartListModalClose} id="cartListModal">
            <Modal.Header closeButton className={`bg-${theme}`}>
                <Modal.Title>Resumen de productos seleccionados</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${theme}`}>
                {
                    cart.length === 0 && <div><h3 className='text-center my-3'>El carro está vacío</h3><p className='text-center my-3'>En nuestra sección de productos vas a poder adquirir los equipos que necesitás</p></div>
                }
                {
                    cart && cart.map(item => <CartListProductItem key={item.id} item={item}/>) 
                }
            </Modal.Body>
            <Modal.Footer className={`bg-${theme}`}>
                <Button variant="secondary" onClick={() => handleEmptyCart()}>
                    Vaciar Carro
                </Button>
                <Button id='processCartList' to="/cart" onClick={() => handleBuy()} disabled={cart.length === 0}>
                    Procesar compra
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CartModal