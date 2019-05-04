import {gql} from 'apollo-boost'

const allExperiencesQuery = gql`
    {
        allExperiences {
            name
            type
            projects {
                id
                name
                date
            }
        } 
    }
`
export {allExperiencesQuery}