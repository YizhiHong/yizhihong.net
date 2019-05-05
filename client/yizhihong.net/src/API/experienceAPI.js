import {gql} from 'apollo-boost'

const allExperiencesQuery = gql`
    { 
        allExperiences {
            id
            name
            location
            title
            type
            startDate
            endDate
            currentWork
            projects {
                id
                name
                date
            }
            details
        } 
    }
`
export {allExperiencesQuery}