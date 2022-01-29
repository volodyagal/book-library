import React from "react";
import './App.scss';
import useLocalStorage from 'use-local-storage'
import {Container} from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="App" data-theme={theme}>
            <div className='mobile-switcher' onClick={() => switchTheme()}>
                <div className='darkMode-icon-wrapper'>
                    <div className='darkMode-icon'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M16.5 9C16.5 12.889 13.54 16.0867 9.75 16.463V1.53703C13.54 1.91332 16.5 5.11099 16.5 9ZM8.25 1.53703V16.463C4.46001 16.0867 1.5 12.889 1.5 9C1.5 5.11099 4.46001 1.91332 8.25 1.53703ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM15 9C15 11.6124 13.3304 13.8349 11 14.6586V3.34141C13.3304 4.16508 15 6.38756 15 9Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <Container fluid className='p-0'>
                <div className='d-flex'>
                    <div className='sidebar-wrapper'>
                        <Sidebar switchTheme={switchTheme} theme={theme}/>
                    </div>
                    <div className='content-wrapper'>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/books' element={<Books theme={theme} switchTheme={switchTheme}/>}/>
                            <Route
                                path="*"
                                element={<Navigate to="/books" />}
                            />
                        </Routes>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default App;
