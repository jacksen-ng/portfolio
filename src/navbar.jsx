import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import { useTranslation } from './hooks/useTranslation';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleLanguage } = useLanguage();
    const { t } = useTranslation();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        <div className="nav-brand">
                            <Link to="/" onClick={handleLinkClick}>JackSen's Portfolio</Link>
                        </div>

                        <div className="nav-actions">
                            <button 
                                className="language-switcher"
                                onClick={toggleLanguage}
                                aria-label="Switch language"
                            >
                                {t('languageSwitch')}
                            </button>

                            <button
                                className={`hamburger-menu ${isOpen ? 'active' : ''}`}
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                            >
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                                <span className="hamburger-line"></span>
                            </button>
                        </div>
                    </div>

                    <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-link" onClick={handleLinkClick}>{t('nav.home')}</Link>
                        <Link to="/about" className="nav-link" onClick={handleLinkClick}>{t('nav.about')}</Link>
                        <Link to="/project" className="nav-link" onClick={handleLinkClick}>{t('nav.projects')}</Link>
                        <Link to="/experience" className="nav-link" onClick={handleLinkClick}>{t('nav.experience')}</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;