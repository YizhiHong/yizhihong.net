import React from 'react'
import Classes from './Project.css'

const project = (props) => {
    let proj = props.proj
    return (
        <li>
            <h4>{proj.name}</h4>
            <h5>{proj.date}</h5>
            <p>{proj.decs}</p>
            <ul className="">
                {proj.details.map((detail)=> {
                    return (
                        <li key={detail}>{detail}</li>
                    )
                })}
            </ul>
            <h5>Power by:</h5>
            <div className={Classes.tech}>
                {proj.techniques.map((tech)=> {
                    return (
                        <div key={tech.name} className={Classes.techLogo}>
                            {tech.img === 'null' ?
                            <span key={tech.name}>{tech.name}</span>:
                            <img alt={tech.name} src={tech.img} />}
                        </div>
                    )
                })}
            </div>
            {proj.link === "" ? null :  <a href={proj.link} rel="noopener noreferrer" target="_blank">{proj.name}</a>}
        </li>
    )
}

export default project