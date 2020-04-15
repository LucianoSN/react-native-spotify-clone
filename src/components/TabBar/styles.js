import styled from 'styled-components';

export const Container = styled.View`
    height: 60px;
    background-color: #222;
    border-top-color: #111;
    border-top-width: 1px;
`;

export const SubContainer = styled.View`
    height: 60px;
    flex-direction: row;
`;

export const GroupAction = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ActionName = styled.Text`
    color: #fff;
    font-size: 11px;
    padding: 5px;
`;
