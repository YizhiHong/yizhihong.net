const graphql = require('graphql');

const TechniquesType = require('./technique')
const Technique = require('../technique')

const ProjectsType = require('./project')
const Project = require('../project')

const ExperiencesType = require('./experience')
const Experience = require('../experience')

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLSchema,
    GraphQLList
} = graphql


const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields: () => ({
        technique:{
            type: TechniquesType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Technique.findById(args.id)
            }
        },
        project:{
            type: ProjectsType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Project.findById(args.id)
            }
        },
        allProjects:{
            type: new GraphQLList(ProjectsType),
            resolve(parent, args){
                return Project.find({})
            }
        },
        allTechniques:{
            type: new GraphQLList(TechniquesType),
            resolve(parent, args){
                return Technique.find({})
            }
        },
        allExperience:{
            type: new GraphQLList(ExperiencesType),
            resolve(parent, args){
                return Experience.find({})
            }
        }
    })
})


module.exports = new GraphQLSchema({
    query: RootQuery
})