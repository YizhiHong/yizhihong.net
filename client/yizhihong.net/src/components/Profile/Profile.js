import React, {Component} from 'react'
import LinkedIn from '../SoicalMedia/LinkedIn'

import {Container,Row,Col} from 'react-bootstrap'
import ScriptLoader from '../../hoc/ScriptLoader'
import APIProvider from '../API/APIProvider'
import Projects from '../Projects/Projects'


const scripts = [{"type":"CSS",
                "url":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"}]


class Profile extends Component{
    render(){
        return (
            <APIProvider>
                <Container>
                    <Row>
                        <Col xs={12} md={8}> 
                            <Projects></Projects>
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

export default ScriptLoader(Profile,scripts)