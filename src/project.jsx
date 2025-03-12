import React from 'react';
import './style/project.css';
import { useTranslation } from './hooks/useTranslation';
import { 
    SiPython, 
    SiReact, 
    SiUnrealengine,
    SiPostgresql,
    SiFastapi,
    SiTensorflow,
    SiPhp,
    SiNextdotjs,
    SiCplusplus,
    SiBlueprint,
    SiOpenai,
    SiGooglecloud,
    SiGithub,
    SiTailwindcss,
} from 'react-icons/si';
import { FaFilePdf, FaLink } from 'react-icons/fa';

const TechTag = ({ icon: Icon, label, color }) => {
    return (
        <div className="tech-tag" title={label}>
            <Icon className="tech-icon" style={{ color: color }} />
            <span className="tech-label">{label}</span>
        </div>
    );
};

function Project() {
    const { t } = useTranslation();
    
    return (
        <div className="project-container">
            <section className="project-section">
                <div className="content-box">
                    <h1>{t('projects.project1Title')}</h1>
                    <p>{t('projects.project1Text1')}</p>
                    <p>{t('projects.project1Text2')}</p>
                    
                    
                    <div className="tech-stack">
                        <h3>{t('projects.techStackTitle')}</h3>
                        <div className="tech-tags">
                            <TechTag icon={SiUnrealengine} label="Unreal Engine" color="#0E1128" />
                            <TechTag icon={SiCplusplus} label="C++" color="#00599C" />
                            <TechTag icon={SiPython} label="Python" color="#3776AB" />
                            <TechTag icon={SiBlueprint} label="Blueprint" color="#000000" />
                            <TechTag icon={SiOpenai} label="OpenAI API" color="#000000" />
                        </div>
                    </div>
                    
                    <div className="links-container">
                        <a 
                            href="https://github.com/jacksen-ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <SiGithub className="link-icon" />
                            {t('projects.viewOnGithub')}
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1ZVXaN0PegYY0Ib0p5prKOCEz_gcVPcJY/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                        >
                            <FaFilePdf className="link-icon" />
                            {t('projects.viewPDF')}
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h1>{t('projects.project2Title')}</h1>
                    <p>{t('projects.project2Text1')}</p>
                    <p>{t('projects.project2Text2')}</p>
                    
                    {/* 添加技术栈标签 */}
                    <div className="tech-stack">
                        <h3>{t('projects.techStackTitle')}</h3>
                        <div className="tech-tags">
                            <TechTag icon={SiPhp} label="PHP" color="#777BB4" />
                            <TechTag icon={SiPostgresql} label="PostgreSQL" color="#4479A1" />
                            
                        </div>
                    </div>
                    
                    <div className="links-container">
                        <a
                            href="https://muds.gdl.jp/~s2322011/web/templates/nba.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-button"
                        >
                            <FaLink className="link-icon" />
                            {t('projects.viewWebsite')}
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h1>{t('projects.project3Title')}</h1>
                    <p>{t('projects.project3Text1')}</p>
                    <p>{t('projects.project3Text2')}</p>
                    
                    
                    <div className="tech-stack">
                        <h3>{t('projects.techStackTitle')}</h3>
                        <div className="tech-tags">
                            <TechTag icon={SiTensorflow} label="TensorFlow" color="#FF6F00" />
                            <TechTag icon={SiFastapi} label="FastAPI" color="#009688" />
                            <TechTag icon={SiPython} label="Python" color="#3776AB" />
                        </div>
                    </div>
                    
                    <div className="links-container">
                        <a
                            href="https://github.com/jacksen-ng/fast-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <SiGithub className="link-icon" />
                            {t('projects.viewOnGithub')}
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h1>{t('projects.project4Title')}</h1>
                    <p>{t('projects.project4Text1')}</p>
                    <p>{t('projects.project4Text2')}</p>
                    
                    <div className="tech-stack">
                        <h3>{t('projects.techStackTitle')}</h3>
                        <div className="tech-tags">
                            <TechTag icon={SiNextdotjs} label="Next.js" color="#000000" />
                            <TechTag icon={SiTailwindcss} label="Tailwind CSS" color="#38BDF8" />
                            <TechTag icon={SiReact} label="React.js" color="#61DAFB" />
                            <TechTag icon={SiFastapi} label="FastAPI" color="#009688" />
                            <TechTag icon={SiGooglecloud} label="Google Cloud" color="#4285F4" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;