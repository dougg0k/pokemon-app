import { gql } from "apollo-boost";

export default gql`
	query GetPokemonInformation($id: String) {
		pokemon(id: $id) {
			id
			number
			name
			maxCP
			maxHP
			image
			types
			evolutions {
				id
				number
				name
				maxCP
				maxHP
				image
				types
			}
		}
	}
`;
