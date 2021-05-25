import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import { RandomCharStyled } from '../randomChar/randomChar';


const ItemDetailsStyled = styled.div`
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


const Field = ({item, field, label}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {Field}


export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        });
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        })

        getData(itemId)
            .then(this.onItemDetailsLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({
            item: null,
            error: true
        });
    }

    
    render() {
        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.item) {
            return <ErrorStyled className='select-error'>Please, select a character</ErrorStyled>
        }


        const {item} = this.state;
        const {name} = item;

        if (this.state.loading) {
            return (
                <RandomCharStyled className="rounded">
                    <Spinner/>
                </RandomCharStyled>
            )
        }

        return (
            <ItemDetailsStyled className="rounded">
                 <HeaderStyled>{name}</HeaderStyled>
                <ListGroup className="list-group-flush">
                   {
                       React.Children.map(this.props.children, (child) => {
                           return React.cloneElement(child, {item});
                       })
                   }
                </ListGroup>
            </ItemDetailsStyled>
        );
    }
}