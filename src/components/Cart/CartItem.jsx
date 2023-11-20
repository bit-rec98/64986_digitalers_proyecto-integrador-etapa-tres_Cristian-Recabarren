import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import ThemeContext from '../../contexts/ThemeContext'

const CartItem = ({productItem}) => {

    let priceInitialAmount = productItem.price * productItem.amount

    const {changeCartAmountContext, deleteCartProductContext} = useContext(CartContext)
    const [total, setTotal] = useState(priceInitialAmount)

    const [inputAmount, handleChange] = useForm({
        amount: productItem.amount
    })

    useEffect(() => {
        let recalculatedTotal = Number(productItem.price * inputAmount.amount).toFixed(2)
        setTotal(recalculatedTotal)
        productItem.amount = inputAmount.amount
        changeCartAmountContext(productItem)
    }, [inputAmount.amount])

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`row py-3 mb-3 bg-${theme}`}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mb-1">
            <div className="bg-image rounded">
            <img
                className="w-100"
                src={`/img/products/${productItem.image}`}
                alt={`${productItem.name} ${productItem.model}`}
            />
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
            <h5>{productItem.name} {productItem.model}</h5>
            <ul className='list-unstyled'>
                <li>Divisas: {productItem.currency}</li>
                <li>Hashrate: {productItem.hashrate}</li>
                <li>Algoritmo: {productItem.algorithm}</li>
                <li>Consumo: {productItem.powerUsage}</li>
                <br />
                <strong>{productItem.price} {productItem.pricing}</strong>
            </ul>
            <button
            className="btn-sm me-1 p-2 mb-1 deleteCartProduct rounded material-symbols-sharp"
            onClick={() => deleteCartProductContext(productItem.id)}
            >
            delete
            </button>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 px-4">
            <input
            type="number"
            min="1"
            className={`form-control text-center productAmount bg-${theme}`}
            placeholder="¿Cuántos?"
            name="amount"
            value={productItem.amount}
            onChange={handleChange}
            />
            <p className="text-center">
            <strong className="precioProducto">${total}</strong>
            </p>
        </div>
    </div>
  );
}

export default CartItem