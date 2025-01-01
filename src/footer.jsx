import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a 
                        href="https://github.com/jacksen-ng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        >
                        <i className="fa-brands fa-github"></i>
                        GitHub
                    </a>
                    <span className="separator">•</span>
                    <a 
                        href="https://www.linkedin.com/in/jack-sen-ng-756207300/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="linkedin-link"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <span className="separator">•</span>
                    <a 
                        href="mailto:ngjacksen04@gmail.com"
                        className="email-link"
                    >
                        <i className="fa-solid fa-envelope"></i>
                        Email
                    </a>
                </div>
                <p>© {currentYear} JackSen Ng. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;