import { useContext } from 'react'
import ModalContext from '../../contexts/ModalContext'

const LogInUpBtn = () => {

    const {handleLogInUpModalOpen} = useContext(ModalContext)

  return (
    <button type="button" className="material-symbols-sharp navItem mx-1 my-1 p-2 d-block" id="logInBtn" onClick={() => handleLogInUpModalOpen()}>
        login
    </button>
  )
}

export default LogInUpBtn