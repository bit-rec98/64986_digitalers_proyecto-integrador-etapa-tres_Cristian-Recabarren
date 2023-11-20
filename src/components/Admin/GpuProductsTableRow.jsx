import { useContext } from "react";
import AlertContext from "../../contexts/AlertContext";

const GpuProductsTableRow = ({gpu, deleteGpuProduct, setGpuProductToEdit}) => {

    const {successToastB} = useContext(AlertContext)
    return (
        <tr>
            <th scope="row">{gpu.id}</th>
            <td>{gpu.name}</td>
            <td>{gpu.model}</td>
            <td>{gpu.price}</td>
            <td>{gpu.currency}</td>
            <td>{gpu.hashrate}</td>
            <td>{gpu.algorithm}</td>
            <td>{gpu.powerUsage}</td>
            <td>{gpu.image}</td>
            <td>
                <button className="btn btn-warning mx-1 my-1" onClick={() => {
                    successToastB.fire({
                        icon: 'success',
                        title: `¡Modificando Gpu - ID N°${gpu.id}!`
                    });
                    setGpuProductToEdit(gpu)
                }}>Modificar</button>
                <button className="btn btn-danger mx-1 my-1" onClick={() => deleteGpuProduct(gpu.id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default GpuProductsTableRow