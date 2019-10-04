import React from "react";
import styled from "styled-components";
import { BLACK_5, BLUE_1 } from "../../utils/colors";

const Divider = styled.hr`
	width: 100%;
	border: 0;
	margin: 5px;
	height: 1px;
	background-image: linear-gradient(
		to right,
		${BLACK_5},
		${props => props.mainColor || BLUE_1},
		${BLACK_5}
	);
`;

export default ({ mainColor }) => <Divider mainColor={mainColor} />;
