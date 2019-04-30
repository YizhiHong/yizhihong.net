import React, {Component} from 'react'
import LinkedIn from '../SoicalMedia/LinkedIn'

import {Container,Row,Col} from 'react-bootstrap'
import Projects from '../Projects/Projects'
import Widget from '../UI/Widget/Widget'

import APIProvider from '../../API/APIProvider'


class Profile extends Component{
    state = {
        social: false
    }
    componentDidMount(){
        this.setState({social: true})
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

export default Profile;