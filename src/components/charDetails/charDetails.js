import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { RandomCharStyled } from '../randomChar/randomChar';


const CharDetailsStyled = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const HeaderStyled = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

export const Term = styled.div`
    font-weight: bold;
`;

export const ErrorStyled = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;



export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then(this.onCharDetailsLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            char: null,
            error: true
        });
    }

    
    render() {
        if (!this.state.char && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.char) {
            return <ErrorStyled className='select-error'>Please, select a character</ErrorStyled>
        }


        const {name, gender, born, died, culture} = this.state.char;

        if (this.state.loading) {
            return (
                <RandomCharStyled className="rounded">
                    <Spinner/>
                </RandomCharStyled>
            )
        }

        return (
            <CharDetailsStyled className="rounded">
                 <HeaderStyled>{name}</HeaderStyled>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Gender</Term>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Born</Term>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Died</Term>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </CharDetailsStyled>
        );
    }
}