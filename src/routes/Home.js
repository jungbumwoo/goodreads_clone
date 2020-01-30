import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import S_newbook from "../components/s_newbook";

class Home extends React.Component {
    state = {
        isLoading: true,
        s_newbooks: []
    };
    getbooks = async () => {
        const newbooks= await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEWYORKTIMES}`)
                
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

        console.log(newbooks)
    };
    render() {
        this.getbooks();
        const { isLoading, s_newbooks } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                        <div className="s_newbooks">
                            <p>가나다라</p>
                        </div>
                    )}
            </section>
        );
    };
}
export default Home;