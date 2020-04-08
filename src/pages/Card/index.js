import React from 'react';
import {
    Container,
    ContainerSubtitle,
    Photo,
    SubTitle,
    SubTitleDescription,
} from './styles';

const Card = () => {
    return (
        <Container>
            <Photo />
            <ContainerSubtitle>
                <SubTitle>Seus Pedidos do dia</SubTitle>
                <SubTitleDescription>
                    Episódios de podcast escolhidos por você
                </SubTitleDescription>
            </ContainerSubtitle>
        </Container>
    );
};

export default Card;
