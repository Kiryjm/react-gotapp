import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import styled from 'styled-components';

import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BooksItem from '../pages/booksItem';
import StartPage from '../pages/startPage';


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
        font-family: 'GoT';
        letter-spacing: 2px;
        word-spacing: 2px;

    @font-face {
		font-family: 'GoT';
		src: url('/fonts/GameOfThrones.ttf');
		font-style: normal;
		font-weight: normal;
	}
`;



export default class App extends Component{

    gotService = new gotService();

    state = {
        showRandomChar: false,
        selectedChar: null,
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
            <Router>
                <div> 
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
                                {showRandomChar ? `Hide` : 'Show'} random character
                                </ToggleButtonStyled>
                            </Col>
                        </Row>

                        <Route path='/' exact component={StartPage}/>
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/houses' component={HousesPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                                
                           return <BooksItem bookId={id}/>}
                        } />
                    </Container>
                </div>
            </Router>
        );
    }
};