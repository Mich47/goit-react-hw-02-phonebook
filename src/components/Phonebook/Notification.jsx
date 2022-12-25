import { PropTypes } from 'prop-types';
import { TextStyled } from './Phonebook.styled';

export const Notification = ({ message }) => {
  return (
    <TextStyled fontWeight="bold" fontSize="m">
      {message}
    </TextStyled>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
