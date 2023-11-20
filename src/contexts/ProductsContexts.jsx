import { createContext, useContext, useEffect, useState } from "react";
import { deleteItem, getItem, postItem, updateItem } from "../utils/http";
import AlertContext from "../contexts/AlertContext";

// Creating context
const ProductsContext = createContext()

// Building provider
const ProductsProvider = ({ children }) => {

    useEffect(() => {
        getAsicProducts()
        getGpuProducts()
    }, [])

    const [asicDbProducts, setAsicDbProducts] = useState(null)
    const [gpuDbProducts, setGpuDbProducts] = useState(null)
    const [asicProductToEdit, setAsicProductToEdit] = useState(null)
    const [gpuProductToEdit, setGpuProductToEdit] = useState(null)

    const urlAsics = import.meta.env.VITE_PORT_ASICS 
    const urlGpus = import.meta.env.VITE_PORT_GPUS
    
    const {successToastB} = useContext(AlertContext)

    //* Get all products - GET
    const getAsicProducts = async () => {
        try {
            const asicProductsDB = await getItem(urlAsics)
            setAsicDbProducts(asicProductsDB)
        } catch (error) {
            console.error(`There was an error while performing [GET] at [getAsicProducts]: ${error}`)
        }
    }

    const getGpuProducts = async () => {
        try {
            const gpuProductsDB = await getItem(urlGpus)
            setGpuDbProducts(gpuProductsDB)
        } catch (error) {
            console.error(`There was an error while performing [GET] at [getGpuProducts]: ${error}`)
        }
    }

    //* Creation of products from management page - POST
    const createAsicProduct = async (newAsicProduct) => {
        try {
            const asicProductCreated = await postItem(urlAsics, newAsicProduct)
            const newAsicProductsDB = [...asicDbProducts, asicProductCreated]
            setAsicDbProducts(newAsicProductsDB)
            successToastB.fire({
                icon: 'success',
                title: `¡Asic - ID N°${asicProductCreated.id} creado!`
            });
        } catch (error) {
            console.error(`There was an error while performing [POST] at [createAsicProduct]: ${error}`)
        }
    }
    
    const createGpuProduct = async (newGpuProduct) => {
        try {
            const gpuProductCreated = await postItem(urlGpus, newGpuProduct)
            const newGpuProductsDB = [...gpuDbProducts, gpuProductCreated]
            setGpuDbProducts(newGpuProductsDB)
            successToastB.fire({
                icon: 'success',
                title: `¡Gpu - ID N°${gpuProductCreated.id} creado!`
            });
        } catch (error) {
            console.error(`There was an error while performing [POST] at [createGpuProduct]: ${error}`)
        }
    }

    //* Modifying products data from management page - PUT
    const updateAsicProduct = async (productToModify) => {
        const fullUrl = urlAsics + productToModify.id
        try {
            const asicProductModified = await updateItem(fullUrl, productToModify)
            console.log(asicProductModified)
            
            const newAsicProductsDB = asicDbProducts.map((asicProduct) => asicProduct.id === productToModify.id ? productToModify : asicProduct)
            setAsicDbProducts(newAsicProductsDB)
            successToastB.fire({
                icon: 'success',
                title: `¡Asic - ID N°${asicProductModified.id} modificado!`
            });
        } catch (error) {
            console.error(`There was an error while performing [PUT] at [updateAsicProduct]: ${error}`)
        }
    }

    const updateGpuProduct = async (productToModify) => {
        const fullUrl = urlGpus + productToModify.id
        try {
            const gpuProductModified = await updateItem(fullUrl, productToModify)
            console.log(gpuProductModified)
            
            const newGpuProductsDB = gpuDbProducts.map((gpuProduct) => gpuProduct.id === productToModify.id ? productToModify : gpuProduct)
            setGpuDbProducts(newGpuProductsDB)
            successToastB.fire({
                icon: 'success',
                title: `¡Gpu - ID N°${gpuProductModified.id} modificado!`
            });

        } catch (error) {
            console.error(`There was an error while performing [PUT] at [updateGpuProduct]: ${error}`)
        }
    }

    //* Deleting products from management page - DELETE
    const deleteAsicProduct = async (id) => {
        console.log(id)
        let isDelete = window.confirm(`¿Estás seguro/a de querer eliminar el con el id: ${id}?`)
        if(isDelete){
            try {
                const fullUrl = urlAsics + id
                const asicProductData = await deleteItem(fullUrl)
                console.log(asicProductData)

                const newAsicProductsDB = asicDbProducts.filter((asicProduct) => asicProduct.id !== id)
                setAsicDbProducts(newAsicProductsDB)
                successToastB.fire({
                    icon: 'success',
                    title: `¡Asic - ID N°${id} eliminado!`
                });
            } catch (error) {
                console.error(`There was an error while performing [DELETE] at [deleteAsicProduct]: ${error}`)
            }
        } else {
            return
        }
    }

    const deleteGpuProduct = async (id) => {
        console.log(id)
        let isDelete = window.confirm(`¿Estás seguro/a de querer eliminar el producto con el id: ${id}?`)
        if(isDelete){
            try {
                const fullUrl = urlGpus + id
                const gpuProductData = await deleteItem(fullUrl)
                console.log(gpuProductData)

                const newGpuProductsDB = gpuDbProducts.filter((gpuProduct) => gpuProduct.id !== id)
                setGpuDbProducts(newGpuProductsDB)
                successToastB.fire({
                    icon: 'success',
                    title: `¡Gpu - ID N°${id} eliminado!`
                });
            } catch (error) {
                console.error(`There was an error while performing [DELETE] at [deleteGpuProduct]: ${error}`)
            }
        } else {
            return
        }
    }

    const data = {gpuDbProducts, asicDbProducts, createAsicProduct, createGpuProduct, updateAsicProduct, updateGpuProduct, deleteAsicProduct, deleteGpuProduct, asicProductToEdit, gpuProductToEdit, setAsicProductToEdit, setGpuProductToEdit}

    return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}

// Exporting
export {ProductsProvider}
export default ProductsContext
