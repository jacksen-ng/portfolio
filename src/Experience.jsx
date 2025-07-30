import React from 'react';
import { SiGithub, SiPython, SiTypescript, SiReact, SiFastapi, SiPostgresql, SiTailwindcss, SiDocker, SiGooglecloud, SiSqlite } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import './style/experience.css';
import { useTranslation } from './hooks/useTranslation';

const SectionTitle = ({ children }) => (
    <h1 className="section-title">{children}</h1>
);

const TechTag = ({ icon: Icon, label, color }) => {
    return (
        <div className="tech-tag" title={label}>
            {Icon && <Icon className="tech-icon" style={{ color: color }} />}
            <span className="tech-label">{label}</span>
        </div>
    );
};

function Experience() {
    const { t } = useTranslation();
    
    const internships = [
        {
            companyKey: 'experience.internshipKatitasName',
            date: '2024.11 ~ Present',
            descriptionKey: 'experience.internshipText',
            techs: [
                { icon: SiPython, label: "Python", color: "#3776AB" },
                { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
                { icon: SiReact, label: "React", color: "#61DAFB" },
                { icon: SiFastapi, label: "FastAPI", color: "#00599C" },
                { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
                { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
                { icon: SiDocker, label: "Docker", color: "#2496ED" },
            ]
        },
        {
            companyKey: 'experience.internshipGenieeName',
            date: '2025.7.26',
            descriptionKey: 'experience.internshipText2',
            prizeKey: 'experience.internshipGenieePrize',
            techs: [
                { icon: SiPython, label: "Python", color: "#3776AB" },
                { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
                { icon: SiReact, label: "React", color: "#61DAFB" },
                { icon: SiFastapi, label: "FastAPI", color: "#00599C" },
                { icon: SiSqlite, label: "SQLite", color: "#003B57" },
            ]
        }
    ];

    const activities = [
        {
            titleKey: "experience.shiftAgentTitle",
            date: "2024.7",
            descriptionKey: "experience.shiftAgentText",
            detailsKey: "experience.shiftAgentDetail",
            links: [
                { url: "https://github.com/jacksen-ng/shift-agent", textKey: "experience.viewProject", icon: SiGithub },
                { url: "https://zenn.dev/jacksen/articles/47e7c8e451669a", textKey: "experience.viewArticle", icon: HiExternalLink },
            ],
            techs: [
                { icon: SiPython, label: "Python", color: "#3776AB" },
                { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
                { icon: SiReact, label: "React", color: "#61DAFB" },
                { label: "LangChain", color: "#83B273" },
                { icon: SiFastapi, label: "FastAPI", color: "#00599C" },
                { icon: SiGooglecloud, label: "Google Cloud", color: "#4285F4" },
            ]
        },
        {
            titleKey: "experience.geekHackathon",
            prizeKey: "experience.geekPrize",
            dateKey: "experience.geekPeriod",
            descriptionKey: "experience.geekText",
            detailsKey: "experience.geekDetail",
            links: [
                { url: "https://github.com/jacksen-ng/camp-06", textKey: "experience.viewProject", icon: SiGithub }
            ],
        },
        {
            titleKey: "experience.zennHackathon",
            date: "2024.12.19 ~ 2025.2.10",
            descriptionKey: "experience.zennText",
            links: [
                { url: "https://github.com/jacksen-ng/zenn-hackathon", textKey: "experience.viewProject", icon: SiGithub }
            ],
        },
        {
            titleKey: "experience.intageTitle",
            date: "2024.12.4",
            descriptionKey: "experience.intageText",
            isPresentation: true,
            presentationUrl: "https://docs.google.com/presentation/d/15LKmcz6zRrNkiRYhqE9i8gYQXLAwKvnuTZ73Bv2qx4c",
        },
        {
            titleKey: "experience.fitTitle",
            date: "2024.9.4 ~ 2024.9.6",
            descriptionKey: "experience.fitText",
            pdfUrl: "https://drive.google.com/file/d/1ZVXaN0PegYY0Ib0p5prKOCEz_gcVPcJY/view?usp=sharing",
        }
    ];
    
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
                {internships.map((internship, index) => (
                    <div className="content-box" key={index}>
                        <h3>{t(internship.companyKey)}</h3>
                        {internship.prizeKey && <span className="prize">{t(internship.prizeKey)}</span>}
                        <span className="date">{internship.date}</span>
                        <p>概要：{t(internship.descriptionKey)}</p>
                        <div className="tech-tags-container" style={{ marginTop: '1rem' }}>
                            <span style={{ marginRight: '0.5rem' }}>{t('experience.techUsed')}:</span>
                            {internship.techs.map(tech => (
                                <TechTag key={tech.label} icon={tech.icon} label={tech.label} color={tech.color} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>


            <section className="hackathon-section">
                <SectionTitle>{t('experience.activitiesTitle')}</SectionTitle>
                {activities.map((activity, index) => (
                    <div className="content-box" key={index}>
                        <h3>{t(activity.titleKey)}</h3>
                        {activity.prizeKey && <span className="prize">{t(activity.prizeKey)}</span>}
                        <span className="date">{activity.date || t(activity.dateKey)}</span>
                        
                        <p>{t(activity.descriptionKey)}</p>

                        {activity.detailsKey && (
                             <div className="hackathon-details">
                                <ul>
                                    {t(activity.detailsKey).split('\n').map((item, idx) => (
                                        <li key={idx}>{item.replace('- ', '')}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activity.techs && activity.techs.length > 0 && (
                            <div className="tech-tags-container" style={{ marginTop: '1rem' }}>
                                {activity.techs.map(tech => (
                                    <TechTag key={tech.label} icon={tech.icon} label={tech.label} color={tech.color} />
                                ))}
                            </div>
                        )}

                        {activity.links && activity.links.length > 0 && (
                            <div className="links-container">
                                {activity.links.map((link, linkIndex) => (
                                    <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.icon && <link.icon />} {t(link.textKey)}
                                    </a>
                                ))}
                            </div>
                        )}

                        {activity.isPresentation && (
                            <div className="slides-preview">
                                <iframe
                                    src={`${activity.presentationUrl}/embed?start=false&loop=false&delayms=3000`}
                                    frameBorder="0"
                                    width="100%"
                                    height="400"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Research Presentation Slides"
                                ></iframe>
                                <div className="backup-link" style={{display: 'none'}}>
                                     <a href={activity.presentationUrl} target="_blank" rel="noopener noreferrer" className="slides-link">
                                         <span>{t('experience.viewPresentation')}</span>
                                         <HiExternalLink />
                                     </a>
                                </div>
                            </div>
                        )}

                        {activity.pdfUrl && (
                             <a
                                href={activity.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-link"
                            >
                                <i className="fa-solid fa-file-pdf"></i>
                                {t('projects.viewPDF')}
                            </a>
                        )}
                    </div>
                ))}
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