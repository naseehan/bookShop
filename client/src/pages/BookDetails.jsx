import React, { useState } from "react";
import "../stylePages/Details/App.css";
import books from "../assets/data/books";
import { CartProvider,useCart } from "../cartContext/cartContext";

const BookDetails = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [bookName, setBookName] = useState("");
  const { addToCart, addToWishlist } = useCart()
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchedTerm(value);
  };


  return (
    <CartProvider>
    <section className="details-section">
      {/* search button */}
      <div className="search">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="search here ..."
          onChange={handleSearch}
        />
      </div>

      <div className="trending">
        <i className="fa-regular fa-star star1"></i>
        <i className="fa-regular fa-star star2"></i>
        <h1>Top Trending Books</h1>
        <p>Most Popular Reads of the Year</p>
        <button>View All</button>
      </div>

      {/* books section */}
      <div className="books">
      {books.map((data) => (
        <div className="book1 commen">
          
            <>
              <p>{data.name}</p>
              <h1>{data.price} ₹</h1>
              <img src={data.bookCover} alt="" />
              <button onClick={() => addToCart(data)}>Add To Cart</button>
              <button onClick={() => addToWishlist(data)}>Add To Wishlist</button>
            </>
         
        </div>
         ))}
      </div>
    </section>
    </CartProvider>
  );
};

export default BookDetails;
