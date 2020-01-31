import React from "react";

function S_newbook({ title, author, book_image }) {
    return (
        <div className="s_newbook">
            <img className="img" src={book_image} alt={title} title={title} />
            <div className="s_newbook__data">
                <h5 class="s_newbook__title">{title}</h5>
                <p class="s_newbook__author">{author}</p>
            </div>
        </div>
    );
}

export default S_newbook;