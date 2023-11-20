import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext';
import AsicProductsTableRow from './AsicProductsTableRow';

const AsicProductsTable = ({asics, deleteAsicProduct, setAsicProductToEdit}) => {

  const {theme} = useContext(ThemeContext)

  return (
    <>
    <table className={`table table-striped table-${theme} my-3`}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Precio</th>
          <th scope="col">Divisas</th>
          <th scope="col">Hashrate</th>
          <th scope="col">Algoritmo</th>
          <th scope="col">Consumo (W)</th>
          <th scope="col">Imagen</th>
          <th scope="col">Gestionar</th>
        </tr>
      </thead>
      <tbody>
        {asics &&
          asics.map((asicProduct) => (
            <AsicProductsTableRow
              key={asicProduct.id}
              asic={asicProduct}
              deleteAsicProduct={deleteAsicProduct}
              setAsicProductToEdit={setAsicProductToEdit}
            />
          ))}
      </tbody>
    </table>
    </>
  );
}

export default AsicProductsTable