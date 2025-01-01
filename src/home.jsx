import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1YlPOcE3eYV-e-2MveBVKp-ogqzFY_LWk";

const LazyProfileImage = () => {
    return (
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
            <img 
                src={PROFILE_IMAGE_URL} 
                alt="jacksen" 
                loading="lazy"
                className="profile-image"
            />
        </Suspense>
    );
};

const Home = () => {
    return (
        <div className="content">
            <main className="home-container">
                <div className="home-content">
                    <div className="left-section">
                        <div className="profile-image">
                            <LazyProfileImage />
                        </div>
                        <div className="profile-info">
                            <h1>Hello, I'm JackSen Ng</h1>
                            <p>Student of Data Science in Musashino University, Japan</p>
                        </div>
                    </div>
                    <div className="right-section">
                        <nav className="home-navigation">
                            <Link to="/about" className="nav-item">About</Link>
                            <Link to="/project" className="nav-item">Projects</Link>
                            <Link to="/contact" className="nav-item">Contact</Link>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;