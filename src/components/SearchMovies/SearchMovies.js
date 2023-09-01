import PT from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Form, Input, SearchhBtn } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const onInputChange = e => {
    const name = e.target.value;
    setInputValue(name.toLowerCase());
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const searchName = inputValue.trim();
    setInputValue('');
    onSubmit(searchName);
    history.push(`?query=${searchName}`);
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
      <SearchhBtn type="submit" aria-label="Search">
        <BiSearchAlt2 style={{ fill: '#fff', width: '20px', height: '20px' }} />
      </SearchhBtn>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PT.func.isRequired,
};

export default SearchMovies;
