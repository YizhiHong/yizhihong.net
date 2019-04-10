import React,{Component}from 'react'
import {graphql} from 'react-apollo'
import Project from './Project/Project'

import Classes from './Projects.css'
import {allProjectsQuery} from '../API/projectAPI' 

class Projects extends Component{
    displayProjects(){
        if(this.props.data.loading){
            return <div>loading...</div>
        }else{
            return (
                this.props.data.allProjects.map((project)=>
                    <Project key={project.id} proj={project}></Project>)
            )
        }
    }

    render(){
        return (
            <ul className={Classes.projectList}>
                {this.displayProjects()}
            </ul>
        )
    }
}

export default graphql(allProjectsQuery)(Projects);