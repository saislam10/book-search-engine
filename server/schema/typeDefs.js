const { gql } = require('apollo-server-express');
const typeDefs = gql`

type Book {
    _id: ID!
    bookId: String
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
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    deleteBook(bookId: String!): User
  }
`;
module.exports = typeDefs;