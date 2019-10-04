import React from "react";
import styled from "styled-components";
import { BLACK_1, BLACK_2, BLACK_3 } from "../../utils/colors";

const CardContainer = styled.div`
	border-radius: 2px;
	${props =>
		props.showBox
			? `box-shadow: 0px 1px 3px 0px ${BLACK_1}, 0px 1px 1px 0px ${BLACK_2},
		0px 2px 1px -1px ${BLACK_3};`
			: ""}
	height: 350px;
	width: 250px;
	display: flex;
	flex-direction: column;
	position: relative;
	margin-right: 10px;
	margin-bottom: 20px;
`;

export default ({ children, height, width, showBox }) => (
	<CardContainer height={height} width={width} showBox={showBox}>
		{children}
	</CardContainer>
);
