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
    return (
        <div className="about-container">
            <section className="intro-section">
                <SectionTitle>Hi there👋</SectionTitle>
                <div className="content-box">
                    <p>My name is JackSen Ng. And I am a Malaysian student which is currently studying in Tokyo, Japan.Now I am a student of the Musashino University.</p>
                    <p>My major is Data Science and I am interested in the field of Web Development and the use of AI to improve the efficiency of the development process.I want to be a AI Engineer in the future.</p>
                </div>
            </section>

            <section className="journey-section">
                <SectionTitle>💫 About My Journey</SectionTitle>
                <div className="content-box">
                    <p>After I graduated from high school, I decided to study abroad in Japan. I chose Japan because I have always been fascinated by the country's culture and technology.</p>
                    <p>I started my journey in Japan by taking a gap year to learn Japanese and in this time I also learned some basic web development technologies.</p>
                    <p>After the gap year, I enrolled in the Musashino University and started my journey in the field of Data Science.</p>
                </div>
            </section>

            <section className="Internship-section">
                <SectionTitle>╰┈➤ Career Goals</SectionTitle>
                <div className="content-box">
                    <p>I want to be a AI Engineer in the future, because I think in the future, the development of the AI will be more and more important.
                        For Example, the Web Development will be more and more automated by the AI. And also the AI can help the developer to write the code more efficiently.
                        People just need to give the idea to the AI, and the AI will generate the code for the developer.
                    </p>
                </div>
            </section>

            <section className="skills-section">
                <SectionTitle>🌟 Skills</SectionTitle>
                <div className="content-box">
                    <p>I am proficient modern web development technologies such as React.js, Next.js and Tailwind CSS.</p>
                    <p>I am also familiar with the Linux operating system and the command line interface.</p>
                    
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