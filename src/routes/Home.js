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
        const {data:{results:{books}}} = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEWYORKTIMES}`)
        console.log(books);
        this.setState({s_newbooks:books, isLoading: false});
    };
    componentDidMount(){
        this.getbooks();
    }
    render() {
        const { isLoading, s_newbooks } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                        s_newbooks.map(s => (
                            <S_newbook key={s.rank} title={s.title} book_image={s.book_image} author={s.author}/>
                        ))
                    )}
            </section>
        );
    };
}
export default Home;