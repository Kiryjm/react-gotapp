import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem} from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from '../spinner';

const ListGroupStyled = styled.div`
    cursor: pointer;
`;

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( charList => {
                this.setState({
                    charList
                });
            });
    }

    getItemList(arr) {
        return arr.map((item, index) => {
            return (
                <ListGroupItem
                    key={index}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + index)}
                >
                {item.name}
                </ListGroupItem>
            )
        });
    }

    render() {

        const{charList} = this.state;

        if(!charList) {
            return <Spinner/>
        }

        const items = this.getItemList(charList);

        return (
            <ListGroupStyled>
                {items}
            </ListGroupStyled>
        );
    }
}