const { gql } = require('apollo-server-express');
const typeDefs = gql`

type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
    bookcount: Int
}

input savedBook {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    getSingleUser: User
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: SavedBook!): User
    deleteBook(bookId: String!): User
  }
`;
module.exports = typeDefs;