import {
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import StoreContext from '../contexts/StoreContext';

function SearchBar() {
  const { dispatch } = useContext(StoreContext);

  const onSearch = (e) => {
    // DISPATCH type: 'SEARCH', payload: e.target.value
    dispatch({ type: 'SEARCH', payload: e.target.value });
  };

  return (
    <Box py={6}>
      <InputGroup>
        <Input placeholder="Search ..." onChange={onSearch} size="lg" />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
