import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, SubContainer, GroupAction, ActionName } from './styles';

const TabBar = () => {
    const [iconConfigure] = useState({
        color: '#fff',
        size: 22,
    });

    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <Icon name="home" {...iconConfigure} />
                    <ActionName>Início</ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="search" {...iconConfigure} />
                    <ActionName>Buscar</ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="book-reader" {...iconConfigure} />
                    <ActionName>Sua Biblioteca</ActionName>
                </GroupAction>
            </SubContainer>
        </Container>
    );
};

export default TabBar;
