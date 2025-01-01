import React from 'react';
import { 
    Code, 
    Braces, 
    Globe, 
    Palette, 
    Brain, 
    Terminal, 
    Laptop, 
    Database 
} from 'lucide-react/dist/esm/icons';
import './style/about.css';


const SkillTag = ({ children, icon: Icon }) => {
    return (
        <div className="skill-tag">
            <Icon className="skill-icon" />
            <span>{children}</span>
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
                    <p>My name is JackSen Ng. And I am a Malaysian student which is currently studying in Tokyo, Japan.</p>
                    <p>Now I am a student of the Musashino University.</p>
                    <p>My major is Data Science and I am interested in the field of Machine Learning and Web Development.</p>
                </div>
            </section>

            <section className="journey-section">
                <SectionTitle>💫 About My Journey</SectionTitle>
                <div className="content-box">
                    <p>After I graduated from high school, I decided to study abroad in Japan. I chose Japan because I have always been fascinated by the country's culture and technology.</p>
                    <p>I started my journey in Japan by taking a gap year and working as a part-time worker in a restaurant. This experience taught me a lot about the importance of hard work and perseverance.</p>
                    <p>After the gap year, I enrolled in the Musashino University and started my journey in the field of Data Science.</p>
                </div>
            </section>

            <section className="Internship-section">
                <SectionTitle>╰┈➤ Internship</SectionTitle>
                <div className="content-box">
                    <p>株式会社カチタス</p>
                    <p>2023年11月 ~ Present</p>
                    <p>In this internship, I worked as a software developer in the company.</p>
                    <p>I was responsible for the development of the company's website and the development of the company's software.</p>
                </div>
            </section>

            <section className="skills-section">
                <SectionTitle>🌟 Skills</SectionTitle>
                <div className="content-box">
                    <p>I am proficient in Python, JavaScript, and C++. I am also familiar with HTML, CSS, and React.</p>
                    <p>I am also familiar with the Linux operating system and the command line interface.</p>
                    
                    <div className="skills-container">
                        <SkillTag icon={Code}>Python</SkillTag>
                        <SkillTag icon={Braces}>JavaScript</SkillTag>
                        <SkillTag icon={Globe}>HTML</SkillTag>
                        <SkillTag icon={Palette}>CSS</SkillTag>
                        <SkillTag icon={Brain}>Machine Learning</SkillTag>
                        <SkillTag icon={Brain}>Deep Learning</SkillTag>
                        <SkillTag icon={Terminal}>Linux</SkillTag>
                        <SkillTag icon={Laptop}>Web Development</SkillTag>
                        <SkillTag icon={Database}>PostgreSQL</SkillTag>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;