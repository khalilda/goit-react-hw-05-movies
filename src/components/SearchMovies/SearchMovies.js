import PT from 'prop-types';
import { useState } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { Form, Input } from '../SearchMovies/SearchMovies.styled';
import { SearchBtn } from '../SearchMovies/SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = e => {
    const name = e.target.value;
    setInputValue(name.toLowerCase());
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const searchName = inputValue.trim();
    setInputValue('');
    onSubmit(searchName);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        placeholder="Search movies"
        value={inputValue}
        onChange={onInputChange}
        required
      />
      <SearchBtn type="submit" aria-label="Search">
        <BiSearchAlt2 style={{ fill: '#fff', width: '20px', height: '20px' }} />
      </SearchBtn>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PT.func.isRequired,
};

export default SearchMovies;
