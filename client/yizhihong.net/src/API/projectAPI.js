import { gql } from "apollo-boost";

const allProjectsQuery = gql`
  {
    allProjects {
      id
      name
      date
      techniques {
        name
        img
      }
      decs
      details
      link
    }
  }
`;

const getProjectQuery = gql`
  query($id: ID!) {
    project(id: $id) {
      id
      name
      date
      techniques {
        name
        img
      }
      decs
      details
      link
    }
  }
`;

export { allProjectsQuery, getProjectQuery };
