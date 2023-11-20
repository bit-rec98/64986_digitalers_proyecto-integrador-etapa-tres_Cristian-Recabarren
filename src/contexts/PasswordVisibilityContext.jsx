import { createContext, useState } from "react";

const PasswordVisibilityContext = createContext()

const PasswordVisibilityProvider = ({children}) => {

    const [showLoginPassword, setShowLoginPassword] = useState(false)

    const handleLoginPasswordVisibility = () => {
        if(showLoginPassword){
            setShowLoginPassword(false)
            const loginPasswordInput = document.getElementById('inputLoginPassword')
            loginPasswordInput.type = 'password'
        } else {
            setShowLoginPassword(true)
            const loginPasswordInput = document.getElementById('inputLoginPassword')
            loginPasswordInput.type = 'text'
        }
    }

    const [showRegisterPassword, setShowRegisterPassword] = useState(false)

    const handleRegisterPasswordVisibility = () => {
        if(showRegisterPassword){
            setShowRegisterPassword(false)
            const registerPasswordInput = document.getElementById('inputRegisterPassword')
            const confirmRegisterPasswordInput = document.getElementById('inputConfirmRegisterPassword')
            confirmRegisterPasswordInput.type = 'password'
            registerPasswordInput.type = 'password'
        } else {
            setShowRegisterPassword(true)
            const registerPasswordInput = document.getElementById('inputRegisterPassword')
            const confirmRegisterPasswordInput = document.getElementById('inputConfirmRegisterPassword')
            confirmRegisterPasswordInput.type = 'text'
            registerPasswordInput.type = 'text'
        }
    }

    const data = {showLoginPassword, showRegisterPassword, handleLoginPasswordVisibility, handleRegisterPasswordVisibility}

    return <PasswordVisibilityContext.Provider value={data}>{children}</PasswordVisibilityContext.Provider>
}

export default PasswordVisibilityContext
export {PasswordVisibilityProvider}