import { useContext } from 'react'
import ModalContext from '../../contexts/ModalContext'

const LogOutBtn = () => {

    const {handleLogOutModalOpen} = useContext(ModalContext)

  return (
    <button type="button" className="material-symbols-sharp navItem mx-1 my-1 p-2 d-none" id="logOutBtn" onClick={() => handleLogOutModalOpen()}>
        logout
    </button>
  )
}

export default LogOutBtn