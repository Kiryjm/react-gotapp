import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem} from 'reactstrap';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { RandomCharStyled } from '../randomChar/randomChar';


const ListGroupStyled = styled.div`
    cursor: pointer;
`;

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( itemList => {
                this.setState({
                    itemList
                });
            })
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            itemList: null,
            error: true
        });
    }

    getItemList(arr) {
        return arr.map(item => {
            const {id} = item;
            const label = this.props.renderItem(item);
            
            return (
                <ListGroupItem
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                >
                {label}
                </ListGroupItem>
            )
        });
    }

    render() {

        if (!this.state.itemList && this.state.error) {
            return <ErrorMessage/>
        } 

        const{itemList} = this.state;

        if(!itemList) {
            return (
                <RandomCharStyled className="rounded">
                    <Spinner/>
                </RandomCharStyled>
            )
        }

        const items = this.getItemList(itemList);

        return (
            <ListGroupStyled>
                {items}
            </ListGroupStyled>
        );
    }
}