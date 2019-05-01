import React, {Component} from 'react'
import LinkedIn from '../SoicalMedia/LinkedIn'

import {Container,Row,Col} from 'react-bootstrap'
import Projects from '../Projects/Projects'
import Widget from '../UI/Widget/Widget'
import Intro from './Intro/Intro'
import APIProvider from '../../API/APIProvider'
import withLogin from '../../hoc/withLogin'
import axios from 'axios'


class Profile extends Component{
    state = {
        social: false,
        information: null
    }

    componentDidMount(){
        const uri = this.props.uri
        const token = this.props.token

        this.setState({social: true})
        if(token){
            axios
            .get(`${uri}introductions`, {
                headers: {
                    Authorization: `Bearer ${token}`
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
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    render(){
        return (
            <APIProvider>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <Intro intro={this.state.information}/>
                            <Widget>
                                <Projects />
                            </Widget>
                        </Col>
                        <Col xs={12} md={4}>
                            <Widget>
                                {this.state.social ? <LinkedIn /> : null}
                            </Widget>
                        </Col>
                    </Row>
                </Container>
            </APIProvider>
        )
    }
}

export default withLogin(Profile);