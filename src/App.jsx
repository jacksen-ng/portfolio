import React, { useState, useEffect } from 'react';
import Navigation from './navbar.jsx';
import Entry from './entry.jsx';
import Background from './background.jsx';
import './style/style.css';
import Home from './home.jsx';
import About from './about.jsx';
import Project from './project.jsx';
import Footer from './footer.jsx';
import Contact from './contact.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppContent() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(!sessionStorage.getItem('hasVisited'));

    useEffect(() => {
        if (isFirstLoad) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                setIsFirstLoad(false);
                sessionStorage.setItem('hasVisited', 'true');
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, [isFirstLoad]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        setIsFirstLoad(false);
        sessionStorage.setItem('hasVisited', 'true');
    };

    return (
        <div className="app">
            <Background />
            {isLoading && isFirstLoad ? (
                <Entry onLoadingComplete={handleLoadingComplete} />
            ) : (
                <div className="page-container">
                    <Navigation />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/project" element={<Project />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <BrowserRouter basename="/portfolio">
            <AppContent />
        </BrowserRouter>
    );
}

export default App;