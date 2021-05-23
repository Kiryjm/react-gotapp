import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import gotService from '../../services/gotService';


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

const ErrorStyled = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;



export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then(char => {
                this.setState({char});
            })
    }

    render() {
        if (!this.state.char) {
            return <ErrorStyled className='select-error'>Please, select a character</ErrorStyled>
        }

        const {name, gender, born, died, culture} = this.state.char;

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