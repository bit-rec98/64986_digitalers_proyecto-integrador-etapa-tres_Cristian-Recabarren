import { createContext, useState } from "react";

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    
    const [showLogInUp, setShowLogInUp] = useState(false)
    const [showLogOut, setShowLogOut] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showCartList, setShowCartList] = useState(false)

    // Register 
    const handleRegisterModalOpen = () => {
        setShowRegister(true)
        setShowLogInUp(false)
    }
    const handleRegisterModalClose = () => {
        setShowRegister(false)
        setShowLogInUp(true)
    }

    const handleRegisterModalDirectClose = () => {
        setShowRegister(false)
    }
    
    // Log In/Up
    const handleLogInUpModalOpen = () => {
        setShowLogInUp(true)
    }
    const handleLogInUpModalClose = () => setShowLogInUp(false)
    
    // Log Out
    const handleLogOutModalOpen = () => {
        setShowLogOut(true)
    }
    const handleLogOutModalClose = () => setShowLogOut(false)

    // Cart Lists
    const handleCartListModalOpen = () => {
        setShowCartList(true)
    }
    const handleCartListModalClose = () => setShowCartList(false)

    const data = {
        showRegister,
        showLogInUp,
        showLogOut,
        showCartList,
        handleRegisterModalOpen,
        handleRegisterModalClose,
        handleRegisterModalDirectClose,
        handleLogInUpModalOpen,
        handleLogInUpModalClose,
        handleLogOutModalOpen,
        handleLogOutModalClose,
        handleCartListModalOpen,
        handleCartListModalClose
    };

    return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
}

export {ModalProvider}
export default ModalContext
