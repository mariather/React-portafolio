import React from 'react'
import Photo from '../assets/pictures/Photo.jpg'
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/github.png'

function About() {
    return (
        <section className="about" id="about">
            <div className="spacer">
                <svg id="visual" preserveAspectRatio="none" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path d="M0 64L18.8 69C37.7 74 75.3 84 112.8 85.2C150.3 86.3 187.7 78.7 225.2 83.3C262.7 88 300.3 105 337.8 101.5C375.3 98 412.7 74 450.2 75.2C487.7 76.3 525.3 102.7 562.8 109.8C600.3 117 637.7 105 675.2 96.2C712.7 87.3 750.3 81.7 787.8 82.5C825.3 83.3 862.7 90.7 881.3 94.3L900 98L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z" fill="#18939a"></path>
                </svg>
            </div>
            <div className="about-content">
                <div id="about-header">
                    <img id="profile" src={Photo} alt="The Pineapple Thief concert in San Francisco"></img>
                    <h1>About Me</h1>
                </div>
                <p>Hello, I am Alejandra. I am a future Web Developer</p>
                <p>After years of studying psychology and the human brain, I have found a new path in learning how</p>
                <p>things operate - this time on the World Wide Web!</p>
                <p>I love learning new things and dissecting things to learn how and why they operate. My eye for detail </p>
                <p>and eternal strive for growth has helped me in my coding and web design, always eager to learn the next </p>
                <p>toolset for my development. With the world at our fingertips, the limit is our imagination.</p>
               
                <div className="information">
                    <a href="https://www.linkedin.com/in/mariather/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin icon"></img>
                    </a>
                    <a href="https://github.com/mariather" target="_blank" rel="noreferrer">
                        <img src={github} alt="github icon"></img>
                    </a>
                    <a href="mailto: mariatxus9310@gmail.com" target="_blank" rel="noreferrer">
                        mariatxus9310@gmail.com
                    </a>
                
                </div>
            </div>
        </section>
    )   
}

export default About