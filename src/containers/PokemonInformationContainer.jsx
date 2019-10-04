import React, { Component } from "react";
import { Query } from "react-apollo";
import Loading from "../components/general/Loading";
import Toolbar from "../components/general/Toolbar";
import PokemonInformationLayout from "../components/pokemon/PokemonInformationLayout";
import GET_POKEMON_INFORMATION from "../graphql/queries/GET_POKEMON_INFORMATION";

class PokemonInformationContainer extends Component {
	render() {
		const id = this.props.match.params.id;
		return (
			<div>
				<Toolbar />
				<Query query={GET_POKEMON_INFORMATION} variables={{ id }}>
					{({ data, loading }) => {
						if (loading) {
							return <Loading screenCentered />;
						}
						return <PokemonInformationLayout pokemon={data.pokemon} />;
					}}
				</Query>
			</div>
		);
	}
}

export default PokemonInformationContainer;
