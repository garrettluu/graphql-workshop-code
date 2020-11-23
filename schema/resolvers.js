let mockData = require('../mockData.json');
const resolvers = {
    // TODO: Fill in this part!
    Query: {
        pokemon(parent, args, context, info) {
            if (args.name) {
                // If we passed in a name, find the first pokemon with that name
                return mockData.pokemon.find((p) => p.name === args.name);
            } else {
                // Else, just return all pokemon
                return mockData.pokemon
            }
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
                moves: JSON.parse(args.moves)
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