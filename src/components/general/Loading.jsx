import React from "react";
import styled from "styled-components";
import { BLUE_1 } from "../../utils/colors";

const LoadingMessage = styled.div`
 ${props =>
		props.screenCentered &&
		`
		position: absolute;
		top: 47vh;
		left: 47vw;
 `}
	color: ${BLUE_1};
	font-size: 1.4em;
`;

export default ({ screenCentered }) => (
	<LoadingMessage screenCentered={screenCentered}>Loading...</LoadingMessage>
);
