import React from "react";
import './book-list-item.css'
import { Link } from "react-router-dom";
const BookListItem = ({ book }) => {
  const { title, author, price, imageCover } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={imageCover} alt="" />
      </div>
      <div className="book-details">
        <Link to="#" className="book-title">
          {title}
        </Link>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className=" btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
