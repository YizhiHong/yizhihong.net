const graphql = require('graphql');

const Project = require('./project');
const Technique = require('./technique');
const Experience = require('./experience');

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLList,
    GraphQLBoolean,
    GraphQLNonNull
} = graphql

/**
 * 
 * Define the GraphQL type
 * @param 
 * @output 
 * 
 */

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

const ProjectsType = new GraphQLObjectType({
    name:'Project',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        date:{type:GraphQLString},
        techniques:{
            type: new GraphQLList(TechniquesType),
            resolve(parent,args){
                return Technique.find({ "_id":  {"$in": parent.techniques}})
            }
        },
        details: {
            type: new GraphQLList(GraphQLString),
            resolve(parent,arg) {
                let d = []
                for(let detail of Object.values(parent.details)){
                    d.push(detail)
                }
                return d
            }
        },
        decs:{type:GraphQLString},
        link:{type:GraphQLString}
    })
})

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


/**
 * 
 * Define the GraphQL Query set
 * @param 
 * @output 
 * 
 */

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
        experience:{
            type: ExperiencesType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Experience.findById(args.id)
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
        allExperiences:{
            type: new GraphQLList(ExperiencesType),
            resolve(parent, args){
                return Experience.find({})
            }
        }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addTech:{
            type: TechniquesType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                img:{type: GraphQLString}
            },
            resolve(parent,args) {
                let tech = new Technique({
                    name: args.name,
                    img: args.img
                })
                return tech.save()
            }
        },
        addProject:{
            type: ProjectsType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                date:{type: GraphQLString},
                techniques: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
                decs: {type: GraphQLString},
                details: {type: new GraphQLList(GraphQLString)},
                link: {type: GraphQLString}
            },
            resolve(parent,args) {
                let proj = new Project({
                    name: args.name,
                    date: args.date,
                    techniques: args.techniques,
                    decs: args.decs,
                    details: args.details,
                    link: args.link
                })
                return proj.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})