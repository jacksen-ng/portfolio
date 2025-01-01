import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="page-container">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        <div className="nav-brand">
                            <Link to="/" onClick={handleLinkClick}>Jacksen's Portfolio</Link>
                        </div>

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

                    <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
                        <Link to="/project" className="nav-link" onClick={handleLinkClick}>Projects</Link>
                        <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;