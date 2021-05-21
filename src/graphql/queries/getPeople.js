import { gql } from '@apollo/client';

const GET_PEOPLE = gql`
  query allPeople {
    allPeople {
      id
      name
      gender
      height
      birthYear
      mass
      image
      species {
        id
        name
      }
    }
  }
`;

export default GET_PEOPLE;
