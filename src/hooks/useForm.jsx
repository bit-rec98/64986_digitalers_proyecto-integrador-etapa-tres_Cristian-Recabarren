import { useState } from "react"

export const useForm = (initialState = []) => {
    const [values, setValues] = useState(initialState)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: Number(value)
        })
    }

    return [values, handleInputChange]
} 