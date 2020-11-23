let mockData = require('../mockData.json');
const resolvers = {
    Query: {
        pokemon(parent, args, context, info) {
            return mockData.pokemon.find((p) => p.name === args.name);
        },
        pokemonByType(parent, args, context, info) {
            return mockData.pokemon.filter((p) => ((p.type1 === args.pokemonType) || ((p.type2) && (p.type2 === args.pokemonType))));
        }
    },

    Mutation: {
        addPokemon(parent, args, context, info) {
            const newPokemon = {
                name: args.name,
                description: args.description,
                type1: args.type1,
                type2: args.type2,
                moves: [],
            };
            mockData.pokemon.push(newPokemon);
            return newPokemon;
        },
        addMoveToPokemon(parent, args, context, info) {
            const newMove = {
                name: args.moveName,
                power: args.movePower,
            }
            const pokemon = mockData.pokemon.find((p) => p.name === args.name)
            if (pokemon) {
                pokemon.moves.push(newMove);
                return newMove;
            }
        }
    }

};

module.exports = resolvers;