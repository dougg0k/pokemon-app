import { gql } from "apollo-boost";

export default gql`
	query GetPokemons($first: Int!) {
		pokemons(first: $first) {
			id
			number
			name
			maxCP
			maxHP
			image
			types
		}
	}
`;
