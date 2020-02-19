import React from "react";
import { Link } from "react-router-dom";

function S_newbook({ id, title, author, book_image }) {
    return (
        <div className="s_newbook">
            <Link to={`/book/${id}`}>
                <img className="img" src={book_image} alt={title} title={title} />
                <div className="s_newbook__data">
                    <h5 className="s_newbook__title">{title}</h5>
                    <p className="s_newbook__author">{author}</p>
                </div>
            </Link>
        </div>
    );
}

export default S_newbook;