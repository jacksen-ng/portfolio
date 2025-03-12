import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './hooks/useTranslation';

const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1YlPOcE3eYV-e-2MveBVKp-ogqzFY_LWk";

const LazyProfileImage = () => {
    return (
        <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
            <img 
                src={PROFILE_IMAGE_URL} 
                alt="[name]" 
                loading="lazy"
                className="profile-image"
            />
        </Suspense>
    );
};

const Home = () => {
    const { t } = useTranslation();
    
    return (
        <div className="content">
            <main className="home-container">
                <div className="home-content">
                    <div className="left-section">
                        <div className="profile-image">
                            <LazyProfileImage />
                        </div>
                        <div className="profile-info">
                            <h1>{t('home.greeting').replace('[name]', 'JackSen Ng')}</h1>
                            <p>{t('home.title')}</p>
                        </div>
                    </div>
                    <div className="right-section">
                        <nav className="home-navigation">
                            <Link to="/about" className="nav-item">{t('nav.about')}</Link>
                            <Link to="/project" className="nav-item">{t('nav.projects')}</Link>
                            <Link to="/experience" className="nav-item">{t('nav.experience')}</Link>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;