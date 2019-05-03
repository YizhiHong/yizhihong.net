import React, {Component} from 'react'
import axios from 'axios'

import {HOST, USER, PASSWORD} from '../config/config'
import Loader from '../components/UI/Loader/Loader'

/**
 * @param {Object} WrappedComponent
 * 
 * @return {Object}
 */

const withLogin = (WrappedComponent) => {
    return class extends Component{
        state = {
            token: null,
            uri : HOST
        }

        componentWillMount() {
            axios
            .post(`${HOST}auth/local`, {
                identifier: USER,
                password: PASSWORD
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                // console.log('User profile', response.data.user);
                // console.log('User token', response.data.jwt);
                this.setState({
                    token: response.data.jwt
                })
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
        }

        render() {
            const token = this.state.token
            return (
                token === null ? 
                    <Loader ></Loader> :
                    <WrappedComponent {...this.props} token={token} uri={this.state.uri}/>
                
            )
        }
    }
    
}

 export default withLogin