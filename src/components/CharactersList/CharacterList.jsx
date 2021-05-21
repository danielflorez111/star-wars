import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import GET_PEOPLE from '../../graphql/queries/getPeople';
import CharacterCard from '../CharacterCard/CharacterCard';
import CharacterFilter from '../CharacterFilter/CharacterFilter';

const CharacterList = () => {
  const {
    loading,
    error,
    data: { allPeople = [] } = {}
  } = useQuery(GET_PEOPLE);
  const [people, setPeople] = useState(allPeople);

  const searchCharacter = (e) => {
    const filteredPeople = allPeople.filter(people => {
      return people.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setPeople(filteredPeople);
  }

  useEffect(() => {
    if (allPeople.length) {
      setPeople(allPeople)
    }
  }, [allPeople])

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <Wrapper>
      <CharacterFilter onSearch={searchCharacter} /> <br />
      <ListWrapper>
        {people.map(people => (
          <CharacterCard
            key={people.id}
            {...people}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding-top: 24px;
`;

const ListWrapper = styled.div`
  padding: 24px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default CharacterList;
