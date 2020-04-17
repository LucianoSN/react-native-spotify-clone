import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #111;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#111', 'transparent', 'transparent', '#111'],
})`
    justify-content: space-between;
    height: 50%;
`;

export const Photo = styled.Image`
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    bottom: 50%;
`;

export const ContainerNavBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const GroupItemNavBar = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonFollow = styled.Text`
    margin-right: 20px;
    color: #fff;
    border-color: #fff;
    border-width: 1px;
    padding: 6px 10px;
    border-radius: 6px;
`;

export const ContainerInfoBand = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const BandName = styled.Text`
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    padding: 15px;
`;

export const BandFooter = styled.Text`
    font-size: 12px;
    text-transform: uppercase;
    color: #e6e6e6;
`;
