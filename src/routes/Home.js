import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import S_newbook from "../components/s_newbook";
import "./Home.css";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

class Home extends React.Component {
    state = {
        isLoading: true,
        s_newbooks: []
    };
    getbooks = async () => {
        const {data:{item}} = await axios.get(``);
        const books = item.slice(0, 12);
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
                            <S_newbook key={s.itemId} id={s.itemId} title={s.title} book_image={s.coverSmallUrl} author={s.author}/>
                        ))
                    )}
            </section>
        );
    };
}

export default Home;