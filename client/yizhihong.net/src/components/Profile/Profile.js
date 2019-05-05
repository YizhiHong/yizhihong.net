import React, {Component,Fragment} from 'react'

import LinkedIn from '../SoicalMedia/LinkedIn'

import {Col} from 'react-bootstrap'
import Widget from '../UI/Widget/Widget'
import Intro from './Intro/Intro'

// import withLogin from '../../hoc/withLogin'
import {TOKEN,HOST} from '../../config/config'
import axios from 'axios'

import {graphql} from 'react-apollo'
import {allExperiencesQuery} from '../../API/experienceAPI' 
import Experiences from '../Experiences/Experiences';
import Loader from '../UI/Loader/Loader';


class Profile extends Component{
    state = {
        social: false,
        information: null
    }

    componentDidMount(){
        // const uri = this.props.uri
        // const token = this.props.token

        // this.setState({social: true})
        if(TOKEN){
            axios
            .get(`${HOST}introductions`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(response => {
                this.setState({information:response.data[0].intro})
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
        }
    }

    shouldComponentUpdate(){
        if(this.props.data.loading) return false
        else return true
    }

    render(){
        let exp = this.props.data
        return (
            <Fragment>
                <Col xs={12} md={8}>
                    <Widget>
                        <Intro intro={this.state.information}/>
                    </Widget>
                    {exp.loading ? <Loader size="8px"></Loader> :
                        <Experiences experiences={exp.allExperiences}></Experiences>
                    }
                </Col>
                <Col xs={12} md={4}>
                    <Widget>
                        <LinkedIn />
                    </Widget>
                </Col>
            </Fragment>
        )
    }
}

export default graphql(allExperiencesQuery)(Profile);