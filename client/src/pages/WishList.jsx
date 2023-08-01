// import React, { useState } from "react";
import { useCart } from "../cartContext/cartContext";
import "../stylePages/cart/App.css"


const WishList = () => {

const { wishlist } = useCart();

    return (
        <section className="wish-section">
            <div className="heading">
                <h1>Wish List</h1>
            </div>

            <div className="cart-items">
            {wishlist.map((data) => (
        <div className="cart-books">
          
            <>
              <p>{data.name}</p>
              <h1>{data.price} ₹</h1>
              <img src={data.bookCover} alt="" />
              {/* <div className="buttons">
              <button onClick={() => setCount(count+1)}>+</button>
              <p>{count}</p>
              <button onClick={handleDecrease}>-</button>
              </div> */}
            </>
         
        </div>
         ))}
            </div>
        </section>
    )
}

export default WishList