import gql from 'graphql-tag';

const GET_POKEMON_QUERY = gql`
  query($id: ID!) {
    pokemon: Pokemon(id: $id) {
      id
      name
      classification
      weight
      weaknesses: damages {
        normal
        fire
        water
        electric
        grass
        ice
        fight
        poison
        ground
        flying
        psychic
        bug
        rock
        ghost
        dragon
        dark
        steel
      }
    }
  }
`;

export { GET_POKEMON_QUERY };
