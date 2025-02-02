import React from 'react';
import styled from 'styled-components';


const SpinnerStyled = styled.div`
		.cssload-container {
		position: relative;
		width: 62px;
		height: 144px;
		overflow: hidden;
		margin:0px auto;
	}

	.cssload-container .cssload-item {
		margin: auto;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 31px;
		height: 31px;
		background-color: rgb(255,255,255);
		box-sizing: border-box;
			-o-box-sizing: border-box;
			-ms-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
		box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
			-o-box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
			-ms-box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
			-webkit-box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
			-moz-box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
	}

	.cssload-container .cssload-moon {
		border-bottom: 6px solid rgb(116,147,164);
		border-radius: 50%;
			-o-border-radius: 50%;
			-ms-border-radius: 50%;
			-webkit-border-radius: 50%;
			-moz-border-radius: 50%;
		animation: spin 1.15s ease infinite;
			-o-animation: spin 1.15s ease infinite;
			-ms-animation: spin 1.15s ease infinite;
			-webkit-animation: spin 1.15s ease infinite;
			-moz-animation: spin 1.15s ease infinite;
	}



	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@-o-keyframes spin {
		from {
			-o-transform: rotate(0deg);
		}
		to {
			-o-transform: rotate(360deg);
		}
	}

	@-ms-keyframes spin {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@-moz-keyframes spin {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
`;


const Spinner = () => {
	return (
		<SpinnerStyled>
			<div className="cssload-container">
				<div className="cssload-item cssload-moon"></div>
			</div>
		</SpinnerStyled>
		
	)
}

export default Spinner;







