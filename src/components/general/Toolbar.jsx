import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BLUE_1, BLUE_2 } from "../../utils/colors";

const Header = styled.header`
	background-image: linear-gradient(72.5deg, ${BLUE_1} 27.9%, ${BLUE_2} 84.2%);
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 60px;
`;

const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	padding: 8px 25px;
	font-weight: 400;
	border-radius: 5px;
	font-size: 1.4em;
	&:focus {
		outline: none;
	}
`;

const Toolbar = () => (
	<Header>
		<StyledLink to="/">Pokemons</StyledLink>
	</Header>
);

export default Toolbar;
