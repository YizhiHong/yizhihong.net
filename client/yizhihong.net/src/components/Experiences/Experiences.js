import React from 'react'
import Experience from './Experience/Experience'

import Classes from '../Projects/Projects.css'
import {withDateSorter} from '../../hoc/utils'

const experiences = (props) => {
    const displayProjects = () => {
        withDateSorter(props.experiences)
        return (
            props.experiences.map((el)=>
                <Experience key={el.id} data={el}></Experience>)
        )
    }

    return (
        <ul className={Classes.projectList}>
            {displayProjects()}
        </ul>
    )
}

export default experiences;