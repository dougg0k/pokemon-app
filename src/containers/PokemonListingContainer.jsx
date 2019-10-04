import React, { Component } from "react";
import { Query } from "react-apollo";
import Loading from "../components/general/Loading";
import Toolbar from "../components/general/Toolbar";
import PokemonsLayout from "../components/pokemon/PokemonsLayout";
import GET_POKEMONS from "../graphql/queries/GET_POKEMONS";

class PokemonListingContainer extends Component {
	render() {
		return (
			<div>
				<Toolbar />
				<Query query={GET_POKEMONS} variables={{ first: 10 }}>
					{({ data, loading }) => {
						if (loading) {
							return <Loading screenCentered />;
						}
						return <PokemonsLayout pokemons={data.pokemons} />;
					}}
				</Query>
			</div>
		);
	}
}

export default PokemonListingContainer;
