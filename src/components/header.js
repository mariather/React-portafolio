import React from 'react'

const header = () => {
    return (
        <header>
            <div className="j-s">
                <span> Alejandra Lopez </span>
            </div>
            <div id="extra-content">
                <a href="https://github.com/mariather" target="_blank" rel="noreferrer" >GitHub</a>
                <a href="https://www.linkedin.com/in/mariather/" target="_blank" rel="noreferrer" >LinkedIn</a>
               
            </div>
            <div className="j-e">
                <a href="#landing">Home</a>
                <a href="#project">Project List</a>
                <a href="#about">About Me</a>
               
            </div>
        </header>
    )
}

export default header