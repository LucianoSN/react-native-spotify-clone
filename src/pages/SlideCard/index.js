import React from 'react';

import { Container, SlideScroll, Title } from './styles';
import Card from '../Card';

const SlideCard = () => {
    return (
        <Container>
            <Title>Test title</Title>
            <SlideScroll>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </SlideScroll>
        </Container>
    );
};

export default SlideCard;
