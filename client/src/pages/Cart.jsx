import React, { useState } from "react";
import { useCart } from "../cartContext/cartContext";
import "../stylePages/cart/App.css"


const Cart = () => {

const [count, setCount] = useState(1)

const { cart } = useCart()


const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

    return (
        <section className="cart-section">
            <div className="heading">
                <h1>Cart Items</h1>
            </div>

            <div className="cart-items">
            {cart.map((data) => (
        <div className="cart-books">
          
            <>
              <p>{data.name}</p>
              <h1>{data.price} ₹</h1>
              <img src={data.bookCover} alt="" />
              <div className="buttons">
              <button onClick={() => setCount(count+1)}>+</button>
              <p>{count}</p>
              <button onClick={handleDecrease}>-</button>
              </div>
            </>
         
        </div>
         ))}
            </div>
        </section>
    )
}

export default Cart