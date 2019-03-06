import React, {Component} from 'react'
import LinkedIn from '../SoicalMedia/LinkedIn'

import {Container,Row,Col} from 'react-bootstrap'
import ScriptLoader from '../../hoc/ScriptLoader'

const scripts = [{"type":"CSS",
                "url":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"}]

class Profile extends Component{
    render(){
        return (
                <Container>
                    <Row>
                        <Col xs={12} md={8}> hi </Col>
                        <Col xs={12} md={4}><LinkedIn></LinkedIn></Col>
                    </Row>
                    
                </Container>
        )
    }

}

export default ScriptLoader(Profile,scripts)