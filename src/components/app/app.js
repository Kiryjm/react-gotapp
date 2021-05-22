import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled from 'styled-components';

import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
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
        error: false
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};