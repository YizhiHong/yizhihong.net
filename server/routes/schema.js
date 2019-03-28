const graphqlHTTP = require('express-graphql')
const schema = require('../models/schema')


module.exports = (app) => {
    app.use('/graphql',graphqlHTTP({
        schema:schema,
        graphiql: true
    }))
}