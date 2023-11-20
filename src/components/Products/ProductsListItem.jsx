import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'

const ProductsListItem = ({item}) => {

  const {deleteCartProductContext} = useContext(CartContext)

  const handleDelete = (id) => {
    deleteCartProductContext(id)
  }

  return (
    <div className='my-2'>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 border-top border-bottom">
            <div className="d-flex flex-row flex-wrap justify-content-between align-items-stretch p-2">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 my-1 py-0 d-flex flex-column">
                    <button className="material-symbols-sharp deleteProduct p-2 rounded" onClick={() => {handleDelete(item.id)}}>delete</button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 mx-0 py-2 rounded">
                    <img className="img-fluid w-100 rounded px-3" src={`/img/products/${item.image}`} alt="producto" loading="lazy"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mx-0 py-2">
                    <h5 className="card-title">{`${item.name} ${item.model}`}</h5>
                    <ul className="list-unstyled d-flex flex-column justify-content-between align-items-start my-2 p-1">
                        <li>Divisa: {item.currency}</li>
                        <li>Hashrate: {item.hashrate}</li>
                        <li>Algoritmo: {item.algorithm}</li>
                        <li>Consumo energético (w): {item.powerUsage}</li>
                    </ul>
                    <p className="fs-5 mt-2">{Number(item.price)} {item.pricing}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsListItem