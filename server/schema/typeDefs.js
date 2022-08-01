const { gql } = require('apollo-server-express');
const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: String!): User
  }

type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
}

input savedBook {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}
type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}


type Auth {
    token: ID!
    user: User
  }


`;
module.exports = typeDefs;