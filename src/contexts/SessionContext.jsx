import { createContext, useContext, useEffect, useState } from "react";
import AlertContext from "./AlertContext";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {

    useEffect(() => {
        getUser()
    }, [])

    /* USERS MANAGEMENT */
    const urlUsers = import.meta.env.VITE_PORT_USERS;

    const [dbUser, setDbUser] = useState(null);
    const [userToEdit, setUserToEdit] = useState(null);

    const {successToastB} = useContext(AlertContext)

    const getUser = async () => {
        try {
            const response = await fetch(urlUsers);
        if (!response.ok) {
            throw new Error(`[getUsers] - Error: ${response.status}`);
        } else {
            const users = await response.json();
            setDbUser(users);
        }
        } catch (error) {
            console.error(
                `There was an error - [getUsers]: ${error}`
            );
        }
    };

    const createUser = async (newUser) => {
        try {
            const config = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newUser),
            };

            const response = await fetch(urlUsers, config);
            if (!response.ok) {
                throw new Error(`[addUser] - Error: ${response.status}`);
            } else {
                const userCreated = await response.json();
                const newDb = [...dbUser, userCreated];
                setDbUser(newDb);
                connectSession(userCreated)
            }
        } catch (error) {
            console.error(
                `There was an error - [addUser]: ${error}`
            );
        }
    };

    const updateUser = async (modifiedUser) => {
        const fullUrl = urlUsers + modifiedUser.id;
        try {
        const config = {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(modifiedUser),
        };

        const response = await fetch(fullUrl, config);

        if (!response.ok) {
            throw new Error(`[updateUser] - Error: ${response.status}`);
        } else {
            const userEdited = await response.json();
            const newDb = dbUser.map((user) =>
                user.id === modifiedUser.id ? modifiedUser : user
            );
            setDbUser(newDb);
            successToastB.fire({
                icon: 'success',
                title: `¡Usuario ID N°${userEdited.id} modificado!`
            });
        }
        } catch (error) {
            console.error(
                `There was an error - [updateUser]: ${error}`
            );
        }
    };

    const deleteUser = async (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de querer eliminar el elemento con el id ${id}?`
        );
        if (isDelete) {
        try {
            const fullUrl = urlUsers + id;

            const fetchConfig = {
                method: "DELETE",
            };

            const response = await fetch(fullUrl, fetchConfig);
            if (!response.ok) {
                throw new Error(`[deleteUser] - Error: ${response.status}`);
            } else {
                const data = await response.json();
                const newDb = dbUser.filter((user) => user.id !== id);
                setDbUser(newDb);
                successToastB.fire({
                    icon: 'success',
                    title: `¡Usuario ID N°${id} eliminado!`
                });
            }
        } catch (error) {
            console.error(
                `There was an error - [deleteUser]: ${error}`
            );
        }
        } else {
            return;
        }
    };

    const connectSession = (isUserLoggedIn) => {
        const connectionStatus = isUserLoggedIn
        handleUIChanges(connectionStatus)
        window.localStorage.setItem('connected', JSON.stringify(connectionStatus))
        return connectionStatus
    };

    
    const [showEnabledButtons, setShowEnabledButtons] = useState(() => { 
        const storedConnectionStatus = JSON.parse(localStorage.getItem('connected'));
        return storedConnectionStatus;
    }); 
    
    useEffect(() => {
        if(showEnabledButtons === true){
            setShowEnabledButtons(true)
        } else {
            setShowEnabledButtons(false)
        }
    }, [showEnabledButtons]);
    
    const handleUIChanges = (connectionStatus) => {
        // Changing interface here
        const uiLogInElement = document.getElementById('logInBtn')
        const uiLogOutElement = document.getElementById('logOutBtn')

        if(connectionStatus){
            uiLogInElement.classList.add('d-none')
            uiLogOutElement.classList.remove('d-none')
        } else {
            uiLogInElement.classList.remove('d-none')
            uiLogOutElement.classList.add('d-none')
        }
    }

    const data = {dbUser, createUser, getUser, updateUser, deleteUser, connectSession, userToEdit, setUserToEdit, handleUIChanges, showEnabledButtons, setShowEnabledButtons};
    return (
        <SessionContext.Provider value={data}>{children}</SessionContext.Provider>
    );
};

export default SessionContext;
export { SessionProvider };