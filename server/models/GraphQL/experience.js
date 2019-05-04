const graphql = require('graphql');

const Project = require('../project');
const ProjectsType = require('./project')

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList,
    GraphQLBoolean
} = graphql

const ExperiencesType = new GraphQLObjectType({
    name:'Experience',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        location:{type:GraphQLString},
        title:{type:GraphQLString},
        startDate:{type:GraphQLString},
        endDate:{type:GraphQLString},
        currentWork: {type: GraphQLBoolean},
        type: {type: GraphQLString},
        projects:{
            type: new GraphQLList(ProjectsType),
            resolve(parent,args){
                return Project.find({ "_id":  {"$in": parent.projects}})
            }
        }
    })
})

module.exports = ExperiencesType;