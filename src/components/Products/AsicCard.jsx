import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import ThemeContext from '../../contexts/ThemeContext'
import AlertContext from '../../contexts/AlertContext'
import SessionContext from '../../contexts/SessionContext'

const AsicCard = ({asicData}) => {

    const {successToast} = useContext(AlertContext)
    const {addCartContext} = useContext(CartContext)

    const handleBuy = (product) => {
        addCartContext(product)
        successToast.fire({
            icon: 'success',
            title: '¡El producto fue agregado correctamente!'
        });
    }

    const {theme} = useContext(ThemeContext)

    const {showEnabledButtons} = useContext(SessionContext)
    
    return (
        <>
            <div
            className={`card cardClass col-xs-10 col-sm-8 col-md-4 col-lg-3 mx-1 my-2 bg-${theme}`}
            >
            <img
                src={`/img/products/${asicData.image}`}
                className="card-img-top rounded mt-3"
                loading="lazy"
                alt="producto"
            />
            <div className="card-body cardBody d-flex flex-column justify-content-evenly">
                <div>
                <h5 className="card-title">{`${asicData.name} ${asicData.model}`}</h5>
                <ul className="list-unstyled mt-3 mb-4">
                    <li className="list-group-item currency">
                    Divisas: {asicData.currency}
                    </li>
                    <li className="list-group-item hashrate">
                    Hashrate: {asicData.hashrate}
                    </li>
                    <li className="list-group-item algorithm">
                    Algoritmo: {asicData.algorithm}
                    </li>
                    <li className="list-group-item power">
                    Consumo energético: {asicData.powerUsage}
                    </li>
                    <p className="card-text mt-4">
                    {asicData.available ? (
                        <small>Disponible</small>
                    ) : (
                        <small>No disponible</small>
                    )}
                    </p>
                </ul>
                </div>
                <h5 className="card-title">
                <span>{`${asicData.price} ${asicData.pricing}`}</span>
                </h5>
                <button
                className="btn addProductBtn my-2"
                onClick={() => handleBuy(asicData)}
                disabled={!showEnabledButtons}
                >
                Agregar al carro
                </button>
            </div>
            </div>
        </>
    );
}

export default AsicCard


/* disabled={!asicData.available || isUserLoggedIn === false} */