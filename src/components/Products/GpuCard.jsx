import { useContext } from "react"
import CartContext from "../../contexts/CartContext"
import ThemeContext from "../../contexts/ThemeContext"
import SessionContext from "../../contexts/SessionContext"

const GpuCard = ({gpuData}) => {
    const {addCartContext} = useContext(CartContext)

    const handleBuy = (gpuProduct) => {
        
        addCartContext(gpuProduct)
    }

    const {theme} = useContext(ThemeContext)

    const {showEnabledButtons} = useContext(SessionContext)

    return (
    <>
        <div
        className={`card p-3 mt-2 mb-5 cardClass cardClassRow bg-${theme}`}
        >
        <div className="row g-0 cardRow">
            <div className="col-md-4 d-flex flex-row align-items-center">
            <img
                src={`/img/products/${gpuData.image}`}
                className="img-fluid rounded-start"
                loading="lazy"
                alt="teclado"
            />
            </div>
            <div className="col-md-8 cardBodyContainer">
            <div className="card-body cardBody">
                <h5 className="card-title">{`${gpuData.name} ${gpuData.model}`}</h5>
                <ul className="list-unstyled">
                <h6 className="card-text mt-4">Especificaciones:</h6>
                <li className="my-3">
                    <ul className="list-unstyled">
                    <li className="list-group-item hashrate">
                        Hashrate: {gpuData.hashrate}
                    </li>
                    <li className="list-group-item power">
                        Consumo: {gpuData.powerUsage}
                    </li>
                    <li className="list-group-item currency">
                        Divisas: {gpuData.currency}
                    </li>
                    <li className="list-group-item algorithm">
                        Algoritmo: {gpuData.algorithm}
                    </li>
                    </ul>
                </li>
                <li className="my-3">
                    {gpuData.available ? (
                    <p className="card-text">
                        <small>Disponible</small>
                    </p>
                    ) : (
                    <p className="card-text">
                        <small>No disponible</small>
                    </p>
                    )}
                </li>
                </ul>
                <h5 className="card-title">
                <span className="productPrice">{gpuData.price}</span>{" "}
                <span className="productPricing">(BTC/USDT/US$)</span>
                </h5>
                <button
                className="btn addProductBtn my-2"
                onClick={() => handleBuy(gpuData)}
                disabled={!showEnabledButtons}
                >
                Agregar al carro
                </button>
                <hr />
                <p className="card-text">
                <small>
                    *En la especificación de las divisas minables se han
                    agregado las más populares al día de la fecha. <br /> Es
                    importante realizar una investigación por cuenta propia para
                    elegir qué divisa obtener.
                </small>
                </p>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default GpuCard