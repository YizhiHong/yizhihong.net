const graphql = require('graphql');

const {GraphQLObjectType, GraphQLID, GraphQLString} = graphql

const Techniques = new GraphQLObjectType({
    name:'Technique',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
    })
})