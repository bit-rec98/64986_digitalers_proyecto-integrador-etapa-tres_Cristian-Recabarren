import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { postItem } from "../utils/http";
import AlertContext from "./AlertContext";

const CartContext = createContext()

const url = import.meta.env.VITE_PORT_ORDERS

const CartProvider = ({children}) => {
    
    const [addToCart, removeFromCart, emptyCart, saveCart, cart] = useLocalStorage('cart', [])

    const [finalTotal, setFinalTotal] = useState(0)
    
    const {successToast} = useContext(AlertContext)

    function productIsAtCart(product){
        return cart.filter(prod => prod.id === product.id).length
    }

    function getProductFromCart(product){
        return cart.find(prod => prod.id === product.id)
    }

    const addCartContext = (product) => {
        if(!productIsAtCart(product.id)){
            product.amount = 1
            addToCart(product)
            successToast.fire({
                icon: 'success',
                title: '¡El producto fue agregado correctamente!'
            });
        } else {
            const cartProduct = getProductFromCart(product)
            cartProduct.amount++
            saveCart(cart)
            window.localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    const changeCartAmountContext = (newProductAmount) => {
        try {
            const newCart = cart.map(product => product.id === newProductAmount.id ? newProductAmount : product)
            saveCart(newCart)
        } catch (error) {
            console.error(`[changeCartAmountContext]: The new product amount could not be saved`, error)
        }
    }

    const deleteCartProductContext = (id) => {
        removeFromCart(id)
        successToast.fire({
            icon: 'success',
            title: '¡Producto eliminado!'
        });
    }

    const saveCartContext = async () => {
        try {
            const savedCart = await postItem(url, cart)
            console.log(savedCart)
            successToast.fire({
                icon: 'success',
                title: '¡Gracias por tu compra!'
            });
        } catch (error) {
            console.error(`[saveCartContext]: The cart could not be saved`, error)
        }
    }

    const emptyCartContext = () => {
        emptyCart()
        successToast.fire({
            icon: 'success',
            title: '¡Lista de carro eliminada!'
        });
    }

    const articlesAmountCartContext = () => {
        let totalSum = cart.reduce((total, product) => {
            return total + product.amount
        }, 0)
        return totalSum
    }

    const totalPriceCartArticlesContext = () => {
        let totalSumArticles = cart.reduce((total, product) => {
            return total + (product.price * product.amount)
        }, 0)
        return totalSumArticles
    }

    const data = {
        cart,
        addCartContext,
        deleteCartProductContext,
        saveCartContext,
        emptyCartContext,
        articlesAmountCartContext,
        totalPriceCartArticlesContext,
        changeCartAmountContext
    }
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }
export default CartContext
