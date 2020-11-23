const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Move {
        name: String!
        power: Int!
    }

    type Pokemon {
        name: String!
        description: String!
        type1: String!
        type2: String
        moves: [Move]!
    }

    type Query {
        pokemon(name: String): Pokemon
        pokemonByType(pokemonType: String): [Pokemon]
    }

    type Mutation {
        addPokemon(name: String, description: String, type1: String, type2: String): Pokemon
        addMoveToPokemon(name: String, moveName: String, movePower: Int): Move
    }
`;

module.exports = typeDefs;