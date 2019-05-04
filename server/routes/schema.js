const graphqlHTTP = require('express-graphql')
const schema = require('../models/schema')
// const schema = require('../models/GraphQL/index')


module.exports = (app) => {
    app.use('/graphql',graphqlHTTP({
        schema:schema,
        graphiql: true
    }))
}