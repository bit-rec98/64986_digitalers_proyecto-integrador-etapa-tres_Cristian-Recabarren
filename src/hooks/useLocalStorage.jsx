import { useState } from "react"

export const useLocalStorage = (key, initialValue = []) => {
    
    const getStoragedValue = () => {
        try {
            const localStoragedValue = window.localStorage.getItem(key)
            return localStoragedValue ? JSON.parse(localStoragedValue) : initialValue
        } catch (error) {
            console.error(`There was an error while getting: ${key} from localStorage - ${error}`)
            return initialValue
        }
    }

    const [storagedValue, setStoragedValue] = useState(getStoragedValue())

    const saveValuesLocalStorage = (values) => {
        try {
            setStoragedValue(values)
            window.localStorage.setItem(key, JSON.stringify(values))
        } catch (error) {
            console.error(`There was an error while saving the values in the localStorage - ${error}`)
        }
    }

    const saveNewValueLocalStorage = (newValue) => {
        try {
            const newStoragedValue = [...storagedValue, newValue]
            setStoragedValue(newStoragedValue)
            window.localStorage.setItem(key, JSON.stringify(newStoragedValue))
        } catch (error) {
            console.error(`There was an error while trying to save ${key} from localStorage ${error}`)
        }
    }

    const deleteValueLocalStorage = (id) => {
        try {
            const newStoragedValue = [...storagedValue]
            const index = newStoragedValue.findIndex(item => item.id === id)
            newStoragedValue.splice(index, 1)
            setStoragedValue(newStoragedValue)
            window.localStorage.setItem(key, JSON.stringify(newStoragedValue))
        } catch (error) {
            console.error(`There was an error while trying to delete the product with the ID: ${id} at ${key} from the localStorage - ${error}`)
        }
    }

    const cleanLocalStorage = () => {
        window.localStorage.clear()
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        setStoragedValue(initialValue)
    }

    return [saveNewValueLocalStorage, deleteValueLocalStorage, cleanLocalStorage, saveValuesLocalStorage, storagedValue]

}