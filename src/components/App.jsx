import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { Section } from './Phonebook/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ],
      name: '',
      number: '',
    }));
  };

  filteredContacts = filter => {
    const { contacts } = this.state;
    const filterContacts = contacts.filter(({ name }) => {
      console.log('name ', name);
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    console.log('filterContact ', filterContacts);
    return filterContacts;
  };

  render() {
    const { name, number, filter } = this.state;

    const filteredContacts = this.filteredContacts(filter);

    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            onSubmit={this.handleSubmitForm}
            onChange={this.handleChange}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onChange={this.handleChange} />
          <ContactList contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}
