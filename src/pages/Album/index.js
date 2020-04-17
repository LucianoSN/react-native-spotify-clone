import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    BandFooter,
    BandName,
    ButtonFollow,
    Container,
    ContainerHeader,
    ContainerInfoBand,
    ContainerNavBar,
    GroupItemNavBar,
    Photo,
} from './styles';

const Album = () => {
    const [iconConfigure] = useState({
        size: 20,
        color: '#fff',
    });

    return (
        <Container>
            <Photo
                source={{
                    uri:
                        'https://i0.wp.com/www.audiograma.com.br/wp-content/uploads/2016/05/nickelback_02-e1467473636737.jpg?resize=770%2C490',
                }}
            />
            <ContainerHeader>
                <ContainerNavBar>
                    <Icon name="arrow-left" {...iconConfigure} />
                    <GroupItemNavBar>
                        <ButtonFollow>Seguindo</ButtonFollow>
                        <Icon name="ellipsis-v" {...iconConfigure} />
                    </GroupItemNavBar>
                </ContainerNavBar>
                <ContainerInfoBand>
                    <BandName>NickelBack</BandName>
                    <BandFooter>8.500.7552 ouvintes mensais</BandFooter>
                </ContainerInfoBand>
            </ContainerHeader>
        </Container>
    );
};

export default Album;
