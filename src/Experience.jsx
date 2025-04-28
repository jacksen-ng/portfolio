import React from 'react';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import './style/experience.css';
import { useTranslation } from './hooks/useTranslation';

const SectionTitle = ({ children }) => (
    <h1 className="section-title">{children}</h1>
);

function Experience() {
    const { t } = useTranslation();
    
    return (
        <div className="experience-container">
            <section className="education-section">
                <SectionTitle>{t('experience.educationTitle')}</SectionTitle>
                <div className="content-box">
                    <div className="education-item">
                        <h3>{t('experience.musashino')}</h3>
                        <span className="date">2023.4 ~ Present</span>
                        <p>{t('experience.dataScience')}</p>
                    </div>
                    
                    <div className="education-item">
                        <h3>{t('experience.meros')}</h3>
                        <span className="date">2021.10 ~ 2023.3</span>
                        <p>{t('experience.japanese')}</p>
                    </div>

                    <div className="education-item">
                        <h3>{t('experience.chineseHighSchool')}</h3>
                        <span className="date">2018.1 ~ 2020.12</span>
                    </div>
                </div>
            </section>

            <section className="internship-section">
                <SectionTitle>{t('experience.internshipTitle')}</SectionTitle>
                <div className="content-box">
                    <h3>株式会社カチタス</h3>
                    <span className="date">2024.11 ~ Present</span>
                    <p>
                        {t('experience.internshipText')}
                    </p>
                </div>
            </section>

            <section className="activity-section">
                <SectionTitle>{t('experience.activitiesTitle')}</SectionTitle>
                <div className="content-box">
                    <h3>{t('experience.zennHackathon')}</h3>
                    <span className="date">2024.12.19 ~ 2025.2.10</span>
                    <p>
                        {t('experience.zennText')}
                    </p>
                    <div className="links-container">
                        <a href="https://github.com/jacksen-ng/zenn-hackathon" target="_blank" rel="noopener noreferrer">
                            <SiGithub /> {t('experience.viewProject')}
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h3>{t('experience.intageTitle')}</h3>
                    <span className="date">2024.12.4</span>
                    <p>
                        {t('experience.intageText')}
                    </p>
                    <div className="slides-preview">
                        <iframe
                            src="https://docs.google.com/presentation/d/15LKmcz6zRrNkiRYhqE9i8gYQXLAwKvnuTZ73Bv2qx4c/embed?start=false&loop=false&delayms=3000"
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
                                href="https://docs.google.com/presentation/d/15LKmcz6zRrNkiRYhqE9i8gYQXLAwKvnuTZ73Bv2qx4c/view" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="slides-link"
                            >
                                <span>{t('experience.viewPresentation')}</span>
                                <HiExternalLink />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content-box">
                    <h3>{t('experience.fitTitle')}</h3>
                    <span className="date">2024.9.4 ~ 2024.9.6</span>
                    <p>
                        {t('experience.fitText')}
                    </p>

                    <a
                            href="https://drive.google.com/file/d/1ZVXaN0PegYY0Ib0p5prKOCEz_gcVPcJY/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                        >
                            <i className="fa-solid fa-file-pdf"></i>
                            {t('projects.viewPDF')}
                    </a>
                </div>
            </section>

            <section className="scholarship-section">
                <SectionTitle>{t('experience.scholarshipTitle')}</SectionTitle>
                <div className="content-box">
                    <div className="scholarship-item">
                        <h3>{t('experience.nitoriScholarship')}</h3>
                        <span className="date">2024.10 ~ 2025.9</span>
                    </div>

                    <div className="scholarship-item">
                        <h3>{t('experience.jassoScholarship')}</h3>
                        <span className="date">2023.4 ~ 2024.3</span>
                    </div>

                    <div className="scholarship-item">
                        <h3>{t('experience.lshScholarship')}</h3>
                        <span className="date">2022.8 ~ 2022.12</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;