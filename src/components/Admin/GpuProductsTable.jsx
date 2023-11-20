
import { useContext } from 'react'
import GpuProductsTableRow from './GpuProductsTableRow'
import ThemeContext from '../../contexts/ThemeContext'

const GpuProductsTable = ({gpus, deleteGpuProduct, setGpuProductToEdit}) => {

    const {theme} = useContext(ThemeContext)

    return (
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
                {gpus && gpus.map((gpuProduct) => (
                    <GpuProductsTableRow
                        key={gpuProduct.id}
                        gpu={gpuProduct}
                        deleteGpuProduct={deleteGpuProduct}
                        setGpuProductToEdit={setGpuProductToEdit}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default GpuProductsTable