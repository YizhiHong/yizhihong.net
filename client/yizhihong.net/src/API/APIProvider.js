import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {SERVER} from '../config/config'

const client = new ApolloClient({
    uri: `${SERVER}graphql`
})

const APIProvider = (props) =>{
    return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>)
}

export default APIProvider

