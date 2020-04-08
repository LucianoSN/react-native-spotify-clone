import React from 'react';
import {
    Container,
    ContainerSubtitle,
    Photo,
    SubTitle,
    SubTitleDescription,
} from './styles';

const Card = ({ item }) => {
    return (
        <Container>
            <Photo />
            <ContainerSubtitle>
                <SubTitle>{item.subtitle.title}</SubTitle>
                <SubTitleDescription>
                    {item.subtitle.description}
                </SubTitleDescription>
            </ContainerSubtitle>
        </Container>
    );
};

export default Card;
