import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';

import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export const HeaderStyled = styled.div`
    a, a:visited {
	    color: #fff;
    }

    a:hover, a:focus, a:active{
	    color: #7493A4;
    }
`;


const App = () => {
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
                        <RandomChar/>
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
};

export default App;