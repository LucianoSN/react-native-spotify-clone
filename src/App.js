import React from 'react';
import { StatusBar } from 'react-native';
import Main from './pages/Main';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#111" />
            <Main />
        </>
    );
};

export default App;
