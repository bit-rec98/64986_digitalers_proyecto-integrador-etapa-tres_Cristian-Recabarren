import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UsersTableRow from './UsersTableRow'

const UsersTable = ({users, deleteUser, setUserToEdit}) => {

  const {theme} = useContext(ThemeContext)
  
  return (
    <table className={`table table-striped table-${theme} my-3`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Usuario</th>
              <th scope="col">Domicilio</th>
              <th scope="col">Gestionar</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map((userElement) => (
                <UsersTableRow
                  key={userElement.id}
                  user={userElement}
                  deleteUser={deleteUser}
                  setUserToEdit={setUserToEdit}
                />
              ))}
          </tbody>
        </table>
  )
}

export default UsersTable