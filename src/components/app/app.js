import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled from 'styled-components';

import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';

const HeaderStyled = styled.div`
    a, a:visited {
	    color: #fff;
    }

    a:hover, a:focus, a:active{
	    color: #7493A4;
    }
`;

const ToggleButtonStyled = styled(Button)`
        margin-bottom: 40px;
`;


export default class App extends Component{

    state = {
        showRandomChar: true,
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        });
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
            showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>;
        }

        const {showRandomChar} = this.state;
        const randomChar = showRandomChar ? <RandomChar/> : null; 

        return (
            <> 
                <Container>
                    <HeaderStyled>
                        <Header />
                    </HeaderStyled>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <ToggleButtonStyled 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}
                            >
                            Toggle random character
                            </ToggleButtonStyled>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};