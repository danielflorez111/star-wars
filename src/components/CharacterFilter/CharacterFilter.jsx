import React from 'react';

import Input from '../Input/Input';

const CharacterFilter = ({ onSearch }) => {
  return (
    <Input
      type="text"
      placeholder="Search character"
      onChange={onSearch}
    />
  );
};

export default CharacterFilter;
