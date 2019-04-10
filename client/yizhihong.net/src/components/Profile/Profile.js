import React, {Component} from 'react'
import LinkedIn from '../SoicalMedia/LinkedIn'

import {Container,Row,Col} from 'react-bootstrap'
import Projects from '../Projects/Projects'
import Widget from '../UI/Widget/Widget'

import APIProvider from '../API/APIProvider'


class Profile extends Component{
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
                            <LinkedIn />
                        </Col>
                    </Row>
                </Container>
            </APIProvider>
        )
    }
}

export default Profile;