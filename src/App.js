import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { whiteTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import Layout from 'layouts/layout';
import Main from 'pages/main';
import Works from 'pages/works';
import Thermos from 'pages/detail/thermos';
import Ohora from 'pages/detail/ohora';
import Varram from 'pages/detail/varram';
import Moye from 'pages/detail/moye';
import Ododoc from 'pages/detail/ododoc';
import Inspien from 'pages/detail/inspien';
import Mixsoon from 'pages/detail/mixsoon';
import Physiogel from 'pages/detail/physiogel';
import Purcell from 'pages/detail/purcell';
import Infigo from 'pages/detail/infigo';

function App() {
    const modeType = whiteTheme;
    const [theme, setTheme] = useState(modeType);
    const [move, setMove] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
            <Layout setTheme={setTheme}>
                <Routes>
                    <Route path="/portfolio/" element={<Main theme={theme} />} />
                    <Route path="/portfolio/works" element={<Works theme={theme} />} />
                    <Route path="/portfolio/detail/thermos" element={<Thermos />} />
                    <Route path="/portfolio/detail/ohora" element={<Ohora />} />
                    <Route path="/portfolio/detail/varram" element={<Varram />} />
                    <Route path="/portfolio/detail/moye" element={<Moye />} />
                    <Route path="/portfolio/detail/ododoc" element={<Ododoc />} />
                    <Route path="/portfolio/detail/inspien" element={<Inspien />} />
                    <Route path="/portfolio/detail/mixsoon" element={<Mixsoon />} />
                    <Route path="/portfolio/detail/physiogel" element={<Physiogel />} />
                    <Route path="/portfolio/detail/purcell" element={<Purcell />} />
                    <Route path="/portfolio/detail/infigo" element={<Infigo />} />
                </Routes>
            </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
