import React from 'react';
import styled from 'styled-components';
import {ToggleButtonStyled} from '../app/app'



const NotFoundStyled = styled.div`
	
		font-family: 'GoT';
		letter-spacing: 2px;
		word-spacing: 2px;
		color: #fff;
		margin-top: 300px;
		text-align: center;
	
	@font-face {
		font-family: 'GoT';
		src: url('/fonts/GameOfThrones.ttf');
		font-style: normal;
		font-weight: normal;
	}
`;


const NotFound = () => {

	function backToMain() {
		window.location.assign('/');
	}

	return(
		<NotFoundStyled>
			<h1>Current page doesn't exist</h1>
			<ToggleButtonStyled
				className="toggle-btn"
				onClick={() => backToMain()}
			>
				Back to the main page
			</ToggleButtonStyled>
		</NotFoundStyled>
	)
}

export default NotFound;