import React, {Component} from 'react'
import axios from 'axios'

import Loader from '../components/UI/Loader/Loader'

const withLogin = (WrappedComponent) => {
    return class extends Component{
        state = {
            token: null,
            uri : 'http://localhost:1337/'
        }

        componentWillMount() {
            axios
            .post('http://localhost:1337/auth/local', {
                identifier: 'test',
                password: '87774166'
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                // console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
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