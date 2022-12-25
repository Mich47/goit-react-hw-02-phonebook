import { Box } from 'components/Box';
import { InputStyled, LabelStyled } from './Phonebook.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Box display="flex" flexDirection="column">
      <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>
      <InputStyled
        id="filter"
        value={filter}
        type="text"
        name="filter"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </Box>
  );
};
