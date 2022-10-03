import React from 'react';
const projects = require('../assets/json/projects.json');

function importAll(images) {
    return images.keys().map(images);
}
const images = importAll(require.context('../assets/projects/', false, /\.(png|jpe?g|svg)$/));

function formatName(name) {
    let format = name.match(/^[a-zA-Z-]+/g)

    if (format) {
        name = name.substring(4, name.length)
    }

    let nameArr = name.split("-")
    for (let index = 0; index < nameArr.length; index++) {
        nameArr[index] = nameArr[index][0].toUpperCase() + nameArr[index].substring(1, nameArr[index].length)
    }

    return nameArr.join(" ")
}

function findImage(name) {
    for (let index = 0; index < images.length; index++) {
        if (images[index].default.match(/\/{1}[a-z-]+\./g)[0] === `/${name}.`) {
            return index
        }
    }
    return 0
}

function Projects() {
    return (
        <section className="projects" id="projects">
            <div>
                <h1>My Portfolio</h1>
            </div>
            <div className="projects-container">
                {projects.map((project, i) => (
                    <div className={`project ${project.mobile === 'true' ? '' : 'not-mobile-resposive'}`} key={i} >
                        <h1>{formatName(project.name)}</h1>
                        <img src={images[findImage(project.name)].default} alt="project demo screenshot"></img>
                        <div>
                            {project.deployment ? <a href={project.deployment} target="_blank" rel="noreferrer">Deployed</a> : <></>}
                            < a href={project.repository} target="_blank" rel="noreferrer" > Code</a>
                        </div>
                        {/* <p>{project.description}</p> */}
                    </div>
                ))
                }
            </div >
        </section >
    )
}

export default Projects