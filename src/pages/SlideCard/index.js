import React from 'react';

import { Container, SlideScroll, Title } from './styles';
import Card from '../Card';

const SlideCard = ({ slide }) => {
    console.log(slide);
    return (
        <Container>
            <Title>{slide.title}</Title>
            <SlideScroll>
                {slide.items &&
                    slide.items.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
            </SlideScroll>
        </Container>
    );
};

export default SlideCard;
