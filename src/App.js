import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { whiteTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import Layout from 'layouts/layout';
import Main from 'pages/main';

function App() {
    const userType = whiteTheme;
    const [theme, setTheme] = useState(userType);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
