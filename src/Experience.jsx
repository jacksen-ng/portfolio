import React from 'react';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import './style/experience.css';

const SectionTitle = ({ children }) => (
    <h1 className="section-title">{children}</h1>
);

function Experience() {
    return (
        <div className="experience-container">
            <section className="education-section">
                <SectionTitle>Education 🎓</SectionTitle>
                <div className="content-box">
                    <div className="education-item">
                        <h3>Musashino University</h3>
                        <span className="date">2023.4 ~ Present</span>
                        <p>Data Science</p>
                    </div>
                    
                    <div className="education-item">
                        <h3>Meros Language School</h3>
                        <span className="date">2021.10 ~ 2023.3</span>
                        <p>Japanese Language</p>
                    </div>

                    <div className="education-item">
                        <h3>Chinese High School</h3>
                        <span className="date">2018.1 ~ 2020.12</span>
                    </div>
                </div>
            </section>

            <section className="internship-section">
                <SectionTitle>Internship Experience 💼</SectionTitle>
                <div className="content-box">
                    <h3>株式会社カチタス</h3>
                    <span className="date">2024.11 ~ Present</span>
                    <p>
                        Working on website development using React.js, FastAPI, and PostgreSQL.
                        Focused on building modern web applications and improving user experience.
                    </p>
                </div>
            </section>

            <section className="activity-section">
                <SectionTitle>Activities 🚀</SectionTitle>
                <div className="content-box">
                    <h3>Zenn-Hackathon</h3>
                    <span className="date">2024.12.19 ~ 2025.2.10</span>
                    <p>
                        Led a team project focusing on note summarization using the Gemini API.
                        Developed a full-stack application with React.js, FastAPI, and PostgreSQL.
                    </p>
                    <div className="links-container">
                        <a href="https://github.com/jacksen-ng/zenn-hackathon" target="_blank" rel="noopener noreferrer">
                            <SiGithub /> View Project
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h3>Intage Research Development Competition</h3>
                    <span className="date">2024.12.4</span>
                    <p>
                        Research project on Basketball tactics using LLM technology.
                        Developed innovative 3DCG simulation presentation methods.
                    </p>
                    <div className="slides-preview">
                        <iframe
                            src="https://docs.google.com/presentation/d/15LKmcz6zRrNkiRYhqE9i8gYQXLAwKvnuTZ73Bv2qx4c/edit?usp=sharing"
                            frameBorder="0"
                            width="100%"
                            height="400"
                            allowFullScreen={true}
                            loading="lazy"
                            title="Research Presentation Slides"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                document.querySelector('.backup-link').style.display = 'block';
                            }}
                        ></iframe>
                        
                        <div className="backup-link">
                            <a 
                                href="https://docs.google.com/presentation/d/15LKmcz6zRrNkiRYhqE9i8gYQXLAwKvnuTZ73Bv2qx4c/edit?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="slides-link"
                            >
                                <span>View Presentation</span>
                                <HiExternalLink />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content-box">
                    <h3>FIT 2024 情報科学技術フォーラム</h3>
                    <span className="date">2024.9.4 ~ 2024.9.6</span>
                    <p>
                        Presented research on Basketball tactics using LLM at the 23rd Information Technology Forum.
                    </p>

                    <a
                            href="https://drive.google.com/file/d/1ZVXaN0PegYY0Ib0p5prKOCEz_gcVPcJY/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                        >
                            <i className="fa-solid fa-file-pdf"></i>
                            View PDF
                    </a>
                </div>
            </section>

            <section className="scholarship-section">
                <SectionTitle>Scholarships & Awards 🏆</SectionTitle>
                <div className="content-box">
                    <div className="scholarship-item">
                        <h3>Nitori Scholarship</h3>
                        <span className="date">2024.10 ~ 2025.9</span>
                    </div>

                    <div className="scholarship-item">
                        <h3>JASSO Scholarship</h3>
                        <span className="date">2023.4 ~ 2024.3</span>
                    </div>

                    <div className="scholarship-item">
                        <h3>LSH Asia Scholarship</h3>
                        <span className="date">2022.8 ~ 2022.12</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;