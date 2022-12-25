import {
  ContactsItem,
  ContactsListStyled,
  TextStyled,
} from './Phonebook.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <TextStyled>
            {name}: {number}
          </TextStyled>
        </ContactsItem>
      ))}
    </ContactsListStyled>
  );
};
