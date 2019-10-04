import React from "react";
import styled from "styled-components";
import { BLUE_3 } from "../../utils/colors";
import Divider from "../general/Divider";
import PokemonCard from "./PokemonCard";

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const EvolutionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 25px;
	justify-content: space-evenly;
	flex-wrap: wrap;
	width: 100%;
`;

const Text = styled.div`
	margin-bottom: 5px;
	font-size: 1.25em;
	color: ${BLUE_3};
	font-weight: 700;
`;

const PokemonInformationLayout = ({ pokemon }) => (
	<Container>
		<PokemonCard
			pokemon={pokemon}
			showBox={false}
			showLink={false}
		></PokemonCard>
		{pokemon.evolutions && (
			<>
				<Text>Evolutions</Text>
				<Divider mainColor={BLUE_3} />
			</>
		)}
		<EvolutionsContainer>
			{pokemon.evolutions &&
				pokemon.evolutions.map(evolution => (
					<PokemonCard pokemon={evolution} showBox showLink={false} />
				))}
		</EvolutionsContainer>
	</Container>
);

PokemonInformationLayout.defaultProps = {
	pokemon: {
		id: 0,
		number: 0,
		name: "",
		maxCP: "",
		maxHP: "",
		image: "",
		types: [],
		evolutions: []
	}
};

export default PokemonInformationLayout;
