import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	BLACK_4,
	BLUE_1,
	GREEN_1,
	GREY_1,
	PURPLE_1,
	RANDOM_COLORS,
	RED_1,
	WHITE_1,
	YELLOW_1
} from "../../utils/colors";
import Card from "../general/Card";
import Divider from "../general/Divider";

const CardImg = styled.img`
	width: 150px;
	height: 150px;
`;

const CardTopContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 10px;
`;

const CardBottomContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const MoreLink = styled(Link)`
	color: ${BLACK_4};
	text-decoration: underline;
	font-size: 0.9em;
	&:focus {
		outline: none;
	}
	&:hover {
		color: ${BLUE_1};
	}
`;

const Text = styled.span`
	color: ${props => props.color || "#000"};
	font-size: ${props => props.fontSize || "0.9"}em;
	padding-top: ${props => props.paddingTop || "0"}px;
	padding-bottom: ${props => props.paddingBottom || "0"}px;
	margin-bottom: ${props => props.marginBottom || "0"}px;
	font-weight: 500;
`;

const TopTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	width: 100%;
`;

const NumberContainer = styled.div`
	border-radius: 50%;
	padding: 6px 5px;
	background-color: ${PURPLE_1};
	margin-left: 10px;
	margin-right: 25px;
`;

const BottomTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 95px;
	width: 100%;
`;

const TypesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const TypeText = styled.span`
	background-color: ${props => props.backgroundColor};
	border-radius: 15px;
	font-size: 0.8em;
	padding: 6px;
	color: ${WHITE_1};
	margin-left: 5px;
	font-weight: 500;
`;

const PokemonsCard = ({
	pokemon: { id, number, name, maxCP, maxHP, image, types },
	showBox,
	showLink
}) => (
	<Card showBox={showBox}>
		<CardTopContainer>
			<TopTextContainer>
				<NumberContainer>
					<Text color={WHITE_1} fontSize={0.8}>
						{number}
					</Text>
				</NumberContainer>
				<Text color={BLACK_4}>{id}</Text>
			</TopTextContainer>
			<CardImg src={image} alt={name} />
			<Text color={YELLOW_1} paddingTop={5}>
				{maxCP} CP
			</Text>
		</CardTopContainer>
		<CardBottomContainer>
			<Divider />
			<BottomTextContainer>
				<Text color={RED_1} marginBottom={5}>
					{name}
				</Text>
				<Text color={GREEN_1} marginBottom={15}>
					{maxHP} HP
				</Text>
				<TypesContainer>
					<Text color={GREY_1}>types: </Text>
					{types &&
						types.map((type, index) => (
							<TypeText
								backgroundColor={
									RANDOM_COLORS[
										Math.floor(Math.random() * RANDOM_COLORS.length)
									]
								}
							>
								{type}
							</TypeText>
						))}
				</TypesContainer>
			</BottomTextContainer>
			{showLink && <MoreLink to={`/more/${id}`}>More Information</MoreLink>}
		</CardBottomContainer>
	</Card>
);

PokemonsCard.defaultProps = {
	pokemon: {
		id: 0,
		number: 0,
		name: "",
		maxCP: "",
		maxHP: "",
		image: "",
		types: []
	},
	showBox: true,
	showLink: true
};

export default PokemonsCard;
