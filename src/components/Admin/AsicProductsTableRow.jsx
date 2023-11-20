import { useContext } from "react";
import AlertContext from "../../contexts/AlertContext";

const AsicProductsTableRow = ({asic, deleteAsicProduct, setAsicProductToEdit}) => {

    const {successToastB} = useContext(AlertContext)
    
    return (
        <tr>
            <th scope="row">{asic.id}</th>
            <td>{asic.name}</td>
            <td>{asic.model}</td>
            <td>{asic.price}</td>
            <td>{asic.currency}</td>
            <td>{asic.hashrate}</td>
            <td>{asic.algorithm}</td>
            <td>{asic.powerUsage}</td>
            <td>{asic.image}</td>
            <td>
                <button className="btn btn-warning mx-1 my-1" onClick={() => {
                    successToastB.fire({
                        icon: 'success',
                        title: `¡Modificando Asic - ID N°${asic.id}!`
                    });
                    setAsicProductToEdit(asic)
                }}>Modificar</button>
                <button className="btn btn-danger mx-1 my-1" onClick={() => deleteAsicProduct(asic.id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default AsicProductsTableRow