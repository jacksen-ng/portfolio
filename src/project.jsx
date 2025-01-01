import React from 'react';
import './style/project.css';
function Project() {
    return (
        <div className="project-container">
            <section className="project-section">
                <div className="content-box">
                    <h1>Project 1 : Text to 3DCG Simulation</h1>
                    <p>This project is a text to 3DCG simulation project. I used the Unreal Engine 5.3 to create a 3DCG simulation.</p>
                    <p>In this project, I proposed a new method to generate 3DCG from text. This project is about the tatics of basketball. Recently, 
                        people are using the whiteboard to draw basketball tatics. However, this method is not efficient and it is not easy to understand.
                        New basketball players especially struggle to visualize plays and movements from static whiteboard drawings.
                        To solve this problem, I developed a system that converts text descriptions of basketball into 3D visualizations. Users
                        can input tactical instructions using natural language, and the system automatically generates an animated 3D scene showing player movements
                        and play development. And I also write a paper about this project.
                    </p>
                    <div className="links-container">
                        <a 
                            href="https://github.com/jacksen-ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <i className="fa-brands fa-github"></i>
                            View on Github
                        </a>

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
                </div>

                <div className="content-box">
                    <h1>Project 2 : NBA Court Visualization</h1>
                    <p>This project is a NBA court visualization project.</p>
                    <p>And also, this website is my first project. I used the PHP and MySQL to create a NBA court visualization.
                        people can more easily understand where the court is.
                    </p>
                    <div className="links-container">
                        <a
                            href="https://muds.gdl.jp/~s2322011/web/templates/nba.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-button"
                        >
                            <i className="fa-solid fa-link"></i>
                            View on Website
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h1>Project 3 : Deep Learning model with FastAPI</h1>
                    <p>This project is a Deep Learning model with FastAPI.</p>
                    <p>I used the tensorflow to create a Deep Learning model. And I also used the FastAPI to create a API for the fruit classification.</p>
                    <div className="links-container">
                        <a
                            href="https://github.com/jacksen-ng/fast-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <i className="fa-brands fa-github"></i>
                            View on Github
                        </a>
                    </div>
                </div>

                <div className="content-box">
                    <h1>Project 4 : Image Classification with Pytorch</h1>
                    <p>This project is a Image Classification with Pytorch.</p>
                    <p>Still in progress...</p>

                </div>
            </section>
        </div>
    );
}

export default Project;