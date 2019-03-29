import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql'
})

const APIProvider = (props) =>{
    return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>)
}

export default APIProvider

