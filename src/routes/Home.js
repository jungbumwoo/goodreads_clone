import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import S_newbook from "../components/s_newbook";
import "./Home.css";
dotenv.config();


class Home extends React.Component {
    state = {
        isLoading: true,
        s_newbooks: []
    };
    getbooks = async () => {
        const {data:{item}} = await axios.get(`http://book.interpark.com/api/bestSeller.api?key=011CCB4F6CD6B759AF7A88AD913C07C441403EC851FFAEE337E54DF961DC7410&categoryId=100&output=json`);
        console.log(item);
        const books = item.slice(0, 12);
        console.log(books);
        this.setState({s_newbooks:books, isLoading: false});        
    };

    componentDidMount(){
        this.getbooks();
    }
    render() {
        const key = process.env.API_KEY;
        console.log(key);
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