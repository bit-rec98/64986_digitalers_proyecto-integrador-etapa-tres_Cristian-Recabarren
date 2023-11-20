//? CRUD: CREATE -> POST

export const postItem = async (url, data) => {
    const fetchConfig = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, fetchConfig)

        if(!response.ok){
            throw new Error(`Something happened: ${response.status} - ${response.statusText}`)
        } else {
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.error(`Error - [POST] -> `, error)
    }
}

//? CRUD: READ -> GET
export const getItem = async (url) => {
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Something happened: ${response.status} - ${response.statusText}`)
        } else {
            return response.json()
        }
    } catch (error) {
        console.error(`Error - [GET] -> ${error}`)
    }
}

//? CRUD: UPDATE -> PUT

export const updateItem = async (url, data) => {
        console.log(data)
        
    const fetchConfig = {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, fetchConfig)
        console.log(response)
        if(!response.ok){
            throw new Error(`Something happened: ${response.status} - ${response.statusText}`)
        } else {
            const data = await response.json()
            console.log(data)
            return data
        }
    } catch (error) {
        console.error(`Error - [PUT] -> ${error}`)
    }
}

//? CRUD: DELETE -> DELETE

export const deleteItem = async (fullUrl) => {

    const fetchConfig = {
        method: 'DELETE'
    }

    try {
        const response = await fetch(fullUrl, fetchConfig)
        console.log(response)
        if(!response.ok){
            throw new Error(`Something happened: ${response.status} - ${response.statusText}`)
        } else {
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.error(`Error - [DELETE] -> ${error}`)
    }
}