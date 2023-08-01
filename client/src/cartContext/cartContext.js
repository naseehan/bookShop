import { createContext, useContext, useState } from "react";

const cartContext = createContext()

export function useCart() {
    return useContext(cartContext)
}


export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([]);

const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book])
}

const addToWishlist = (book) => {
    setWishlist((prevWishlist) => [...prevWishlist, book]);
  };

return (
    <cartContext.Provider value={{ cart, addToCart, wishlist, addToWishlist }}>
        {children}
    </cartContext.Provider>
)
}