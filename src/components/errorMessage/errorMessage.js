import React from 'react';
import styled from 'styled-components';


const ErrorStyled = styled.div`
		span {
			color: #26536B;
			font-weight: bold;
		}
		img {
			width: 100%;
		}
`;

const ErrorMessage = () => {

	return (
	<ErrorStyled>
		<img src={'/img/error.jpg'} alt='error'></img>
		<span>Something goes wrong</span>
	</ErrorStyled>	
	)
}

export default ErrorMessage;