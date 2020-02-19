import { gql } from "apollo-boost";

const GET_BOOKS = gql`
    {
        type Mutation {
            createBook(
                title:String!,
                
            )
        }
    }
`