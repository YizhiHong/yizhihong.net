const graphql = require('graphql');
const Project = require('./project');
const Technique = require('./technique');

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql

const TechniquesType = new GraphQLObjectType({
    name:'Technique',
    fields: () => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        img:{type:GraphQLString}
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
        decs:{type:GraphQLString},
        link:{type:GraphQLString}
    })
})

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
                return Projects.find({})
            }
        },
        allTechniques:{
            type: new GraphQLList(TechniquesType),
            resolve(parent, args){
                return Technique.find({})
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
                link: {type: GraphQLString}
            },
            resolve(parent,args) {
                // let techniques = Technique.find({ id: args.techniquesId})
                let proj = new Project({
                    name: args.name,
                    date: args.date,
                    techniques: args.techniques,
                    decs: args.decs,
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