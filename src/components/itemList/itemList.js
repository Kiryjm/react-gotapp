import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroupItem} from 'reactstrap';

const ListGroupStyled = styled.div`
    cursor: pointer;
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroupStyled>
                <ListGroupItem>
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroupStyled>
        );
    }
}