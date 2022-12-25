import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Phonebook.styled';

// const containerStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: '16px',
// };

export const ContactForm = ({ name, number, onSubmit, onChange }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column">
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <InputStyled
          id="name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <LabelStyled htmlFor="number">Number</LabelStyled>
        <InputStyled
          id="number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </Box>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
    // <Box {...containerStyles}>
    //   {options.map(item => (
    //     <ButtonStyled[]
    //       key={item}
    //       type="button"
    //       name={item}
    //       onClick={onLeaveFeedback}
    //     >
    //       {item}
    //     </ButtonStyled>
    //   ))}
    // </Box>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
