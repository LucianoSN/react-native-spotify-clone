import React from 'react';
import { StatusBar } from 'react-native';

import Main from './pages/Main';
import TabBar from './components/TabBar';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#111" />
            <Main />
            <TabBar />
        </>
    );
};

export default App;
