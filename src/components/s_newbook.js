import React from "react";

function S_newbook({ title, author, pubDate, description, book_image, publisher}) {
    return (
        <div className="s_newbook">
            <img src={book_image} alt={title} title={title} />
            <div className="s_newbook__data">
                <h5 class="s_newbook__title">{title}</h5>
                <p class="s_newbook__author">{author}</p>
                <p class="s_newbook__publisher">{publisher}</p>
                <p class="s_newbook__pubDate">{pubDate}</p>
                <p class="s_newbook__description">{description}</p>

            </div>
        </div>
    );
}

export default S_newbook;