import React from 'react';
import styled from 'styled-components';

const StartPageStyled = styled.div`
		

	h1 {
		color: #fff;
		font-family: 'GoT';
		font-size: 100px;
		position: absolute;
		top: 540px;
	    animation: tracking-in-expand  1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	}

	p {
		margin-left: 300px;
	}

	@keyframes tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
}


	@font-face {
		font-family: 'GoT';
		src: url('/fonts/GameOfThrones.ttf');
		font-style: normal;
		font-weight: normal;
		}


`;


const StartPage = () => {
    return (
        <StartPageStyled>
			<h1>
				Game of Thrones
			<p>Database</p>
			</h1>
			
		</StartPageStyled>
    );
};

export default StartPage;
