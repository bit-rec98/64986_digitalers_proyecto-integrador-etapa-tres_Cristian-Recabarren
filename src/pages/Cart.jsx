import CartContext from '../contexts/CartContext'
import CartItem from '../components/Cart/CartItem'
import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import Atropos from 'atropos/react'

const Cart = () => {

    const {
        cart,
        articlesAmountCartContext,
        totalPriceCartArticlesContext,
        saveCartContext,
        emptyCartContext,
    } = useContext(CartContext)

    useEffect(() => {
        document.title = 'LTH Store - Finalizar compra'
    }, [])

    const [taxes, setTaxes] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    
    useEffect(() => {
        calculateTotal()
    }, [cart])

    const calculateTotal = () => {
        let calculatedTotal = totalPriceCartArticlesContext()
        let calculatedTaxes = (calculatedTotal * 0.10).toFixed(2)
        let calculatedSubTotal = (calculatedTotal - calculatedTaxes).toFixed(2)
        setTaxes(calculatedTaxes);
        setSubTotal(calculatedSubTotal);
    }
    
    

    const {theme} = useContext(ThemeContext)

    return (
    <section className="container my-5">
        <div className="row d-flex justify-content-center my-4">
            <div className="col-sm-12 col-md-12 col-lg-8">
                <div className={`card mb-4 mt-4 bg-${theme}`}>
                    <div className="card-header py-4">
                        <h3 className="mb-0 text-center">
                        Resumen del carro - {articlesAmountCartContext()}{" "}
                        {articlesAmountCartContext() === 1 ? "Artículo" : "Artículos"}
                        </h3>
                    </div>
                    <div className="card-body" id="clientProductsList">
                        {cart &&
                        cart.map((item) => (
                            <CartItem key={item.id} productItem={item} />
                        ))}
                        {cart.length === 0 && (
                        <div className="d-flex flex-column justify-content-center align-items-center my-5 py-5">
                            <h3 className="text-center">El carro está vacío</h3>
                            <small className="text-center mt-3">
                            Podés volver a la sección de productos para conseguir
                            nuestros artículos
                            </small>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {cart.length !== 0 && (
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className={`card mb-4 mt-4 bg-${theme}`}>
                        <div className="card-header py-3">
                            <h5 className="mb-0">Resumen carrito</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    <h6 className='me-2'>Productos</h6>
                                    <span>
                                        {cart && cart.map((item) => (
                                                <small className='d-flex flex-column' key={item.id}>{item.name}</small>
                                        ))}

                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                <h6>Envío</h6>
                                <span>Gratis</span>
                                </li>
                                <li className="list-group-item d-flex flex-column align-items-stretch border-0 px-0 pb-0">
                                <div className='d-flex flex-row justify-content-between'>
                                    <div>
                                        <strong>Subtotal</strong>
                                    </div>
                                    <span>
                                        <strong id="subTotal">{subTotal}</strong>
                                    </span>
                                </div>
                                <div className='d-flex flex-row justify-content-between'>
                                    <div>
                                        <strong>(IVA incluido)</strong>
                                    </div>
                                    <span>
                                        <strong id="IVA">{taxes}</strong>
                                    </span>
                                </div>
                                </li>
                                <hr />
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                <div>
                                    <strong>Total de la compra</strong>
                                </div>
                                <span>
                                    <strong id="total">
                                    {totalPriceCartArticlesContext().toFixed(2)}
                                    </strong>
                                </span>
                                </li>
                            </ul>
                        <div className="d-flex flex-row align-items-center justify-content-between mt-4">
                            <button
                            className="btn btn-danger cleanCart btn-block mx-1"
                            onClick={emptyCartContext}
                            >
                            Limpiar carro
                            </button>
                            <button
                            className="btn btn-success btn-block mx-1"
                            id="processCart"
                            onClick={saveCartContext}
                            >
                            Procesar compra
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={`card mb-4 bg-${theme}`}>
                <div className="card-body cardsClass">
                <h5>Métodos de pago</h5>
                <div className="d-flex flex-row">
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/Visa_Inc.-Logo.wine.svg"
                        alt="visa"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/Mastercard-Logo.wine.svg"
                        alt="mastercard"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/American_Express-Logo.wine.svg"
                        alt="amex"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/PayPal-Logo.wine.svg"
                        alt="paypal"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/Binance-BNB-Icon-Logo.wine.svg"
                        alt="binance coin"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/Bitcoin-Logo.wine.svg"
                        alt="bitcoin"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/Ethereum-Logo.wine.svg"
                        alt="ether"
                    />
                    </Atropos>
                    <Atropos
                    className="atroposElement col rounded p-1 m-1"
                    shadow={false}
                    highlight={true}
                    data-atropos-offset={5}
                    >
                    <img
                        className="w-100 paymentLogo"
                        src="/img/payments/Tether_(cryptocurrency)-Logo.wine.svg"
                        alt="tether"
                    />
                    </Atropos>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Cart