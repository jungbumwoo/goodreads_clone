import ApolloClient from "apollo-boost";
import dotenv from "dotenv";

const client = new ApolloClient({
    uri: `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.NEWYORKTIMES}`
});


/* (api 참고 )http://blog.aladin.co.kr/openapi/category/29154402?communitytype=MyPaper  */
export default client;