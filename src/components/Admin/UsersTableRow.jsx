import React, { useContext } from 'react'
import AlertContext from '../../contexts/AlertContext';

const UsersTableRow = ({user, deleteUser, setUserToEdit}) => {

    const {successToastB} = useContext(AlertContext)
    
    return (
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.userEmail}</td>
            <td>{user.user}</td>
            <td>{user.address}</td>
            <td>
                <button className="btn btn-warning mx-1" onClick={() => {
                    successToastB.fire({
                        icon: 'success',
                        title: `¡Modificando usuario ID N°${user.id}!`
                    });
                    setUserToEdit(user)
                }}>Modificar</button>
                <button className="btn btn-danger mx-1" onClick={() => deleteUser(user.id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default UsersTableRow