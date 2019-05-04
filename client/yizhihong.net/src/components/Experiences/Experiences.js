import React,{Component}from 'react'
import {graphql} from 'react-apollo'
import Project from './Project/Project'

import Classes from './Projects.css'
import {allExperiencesQuery} from '../../API/experienceAPI' 
import Loader from '../UI/Loader/Loader'
import {withDateSorter} from '../../hoc/utils'

class Projects extends Component{
    displayProjects(){
        if(this.props.data.loading){
            return <Loader size="5px"></Loader>
        }else{
            withDateSorter(this.props.data.allExperiences)
            return (
                this.props.data.allExperiences.map((project)=>
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

export default graphql(allExperiencesQuery)(Projects);