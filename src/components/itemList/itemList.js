import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem} from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { RandomCharStyled } from '../randomChar/randomChar';


const ListGroupStyled = styled.div`
    cursor: pointer;
`;

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( charList => {
                this.setState({
                    charList
                });
            })
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            charList: null,
            error: true
        });
    }

    getItemList(arr) {
        return arr.map(item => {
            const id = +item.url.match(/\d+$/);

            return (
                <ListGroupItem
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                >
                {item.name}
                </ListGroupItem>
            )
        });
    }

    render() {

        if (!this.state.charList && this.state.error) {
            return <ErrorMessage/>
        } 

        const{charList} = this.state;

        if(!charList) {
            return (
                <RandomCharStyled className="rounded">
                    <Spinner/>
                </RandomCharStyled>
            )
        }

        const items = this.getItemList(charList);

        return (
            <ListGroupStyled>
                {items}
            </ListGroupStyled>
        );
    }
}