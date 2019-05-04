const graphql = require('graphql');

const Technique = require('../technique');
const TechniquesType = require('./technique')

const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList
} = graphql

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

module.exports = ProjectsType