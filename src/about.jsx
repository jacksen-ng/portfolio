import React from 'react';
import { 
    SiPython, 
    SiJavascript, 
    SiHtml5, 
    SiCss3, 
    SiPytorch, 
    SiLinux, 
    SiReact, 
    SiPostgresql,
    SiGithub,
    SiDocker,
    SiGooglecloud,
    SiNextdotjs,
    SiTailwindcss,
    SiFastapi,
    SiFlask,
    SiNodedotjs,
} from 'react-icons/si';
import { TbBrandThreejs } from "react-icons/tb";
import './style/about.css';
import { useTranslation } from './hooks/useTranslation';

const SkillTag = ({ icon: Icon, label, color }) => {
    return (
        <div className="skill-tag" title={label}>
            <Icon className="skill-icon" style={{ color: color }} />
            <span className="skill-label">{label}</span>
        </div>
    );
};

const SectionTitle = ({ children }) => (
    <h1 className="section-title">{children}</h1>
);

function About() {
    const { t } = useTranslation();
    
    return (
        <div className="about-container">
            <section className="intro-section">
                <SectionTitle>{t('about.greeting')}</SectionTitle>
                <div className="content-box">
                    <p>{t('about.intro').replace('[name]', 'JackSen Ng')}</p>
                    <p>{t('about.major')}</p>
                </div>
            </section>

            <section className="journey-section">
                <SectionTitle>{t('about.journeyTitle')}</SectionTitle>
                <div className="content-box">
                    <p>{t('about.journeyText1')}</p>
                    <p>{t('about.journeyText2')}</p>
                    <p>{t('about.journeyText3')}</p>
                </div>
            </section>

            <section className="Internship-section">
                <SectionTitle>{t('about.careerTitle')}</SectionTitle>
                <div className="content-box">
                    <p>{t('about.careerText')}</p>
                </div>
            </section>

            <section className="skills-section">
                <SectionTitle>{t('about.skillsTitle')}</SectionTitle>
                <div className="content-box">
                    <p>{t('about.skillsText1')}</p>
                    <p>{t('about.skillsText2')}</p>
                    
                    <div className="skills-container">
                        <SkillTag icon={SiPython} label="Python" color="#3776AB" />
                        <SkillTag icon={SiJavascript} label="JavaScript" color="#F7DF1E" />
                        <SkillTag icon={SiHtml5} label="HTML5" color="#E34F26" />
                        <SkillTag icon={SiCss3} label="CSS3" color="#1572B6" />
                        <SkillTag icon={SiPytorch} label="PyTorch" color="#EE4C2C" />
                        <SkillTag icon={SiLinux} label="Linux" color="#FCC624" />
                        <SkillTag icon={SiReact} label="React.js" color="#61DAFB" />
                        <SkillTag icon={SiPostgresql} label="PostgreSQL" color="#4169E1" />
                        <SkillTag icon={SiGithub} label="GitHub" color="#181717" />
                        <SkillTag icon={SiDocker} label="Docker" color="#2496ED" />
                        <SkillTag icon={SiGooglecloud} label="Google Cloud" color="#4285F4" />
                        <SkillTag icon={TbBrandThreejs} label="Three.js" color="#ffffff" />
                        <SkillTag icon={SiNextdotjs} label="Next.js" color="#000000" />
                        <SkillTag icon={SiTailwindcss} label="Tailwind CSS" color="#38BDF8" />
                        <SkillTag icon={SiFastapi} label="FastAPI" color="#009488" />
                        <SkillTag icon={SiFlask} label="Flask" color="#000000" />
                        <SkillTag icon={SiNodedotjs} label="Node.js" color="#339933" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;