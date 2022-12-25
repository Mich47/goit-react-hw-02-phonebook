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

export const ContactForm = ({ value, onChange, onSubmit }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <LabelStyled>Name</LabelStyled>
      <InputStyled
        type="text"
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
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
