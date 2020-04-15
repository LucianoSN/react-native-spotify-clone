import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, SubContainer, GroupAction, ActionName } from './styles';

const TabBar = () => {
    const [iconConfigure] = useState({
        color: '#fff',
        size: 25,
    });

    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <Icon name="home" {...iconConfigure} />
                </GroupAction>
            </SubContainer>
        </Container>
    );
};

export default TabBar;
