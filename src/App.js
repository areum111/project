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
                    <Route path="/" element={<Main theme={theme} />} />
                    <Route path="/works" element={<Works theme={theme} />} />
                    <Route path="/detail/thermos" element={<Thermos />} />
                    <Route path="/detail/ohora" element={<Ohora />} />
                    <Route path="/detail/varram" element={<Varram />} />
                    <Route path="/detail/moye" element={<Moye />} />
                    <Route path="/detail/ododoc" element={<Ododoc />} />
                    <Route path="/detail/inspien" element={<Inspien />} />
                    <Route path="/detail/mixsoon" element={<Mixsoon />} />
                    <Route path="/detail/physiogel" element={<Physiogel />} />
                    <Route path="/detail/purcell" element={<Purcell />} />
                    <Route path="/detail/infigo" element={<Infigo />} />
                </Routes>
            </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
