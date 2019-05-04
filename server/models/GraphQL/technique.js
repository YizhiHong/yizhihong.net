const graphql = require('graphql');

const Project = require('../project');
const ProjectsType = require('./project')

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList
} = graphql

const TechniquesType = new GraphQLObjectType({
    name:'Technique',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        img:{type:GraphQLString},
        projects:{
            type:new GraphQLList(ProjectsType),
            resolve(parent,args){
                return Project.find({"techniques":  parent.id})
            }
        }
    })
})

console.log('====================================');
console.log(TechniquesType);
console.log('====================================');

module.exports = TechniquesType