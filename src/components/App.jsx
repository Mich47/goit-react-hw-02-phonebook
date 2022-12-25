import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { Section } from './Phonebook/Section';
// import { FeedbackOptions } from './Feedback';
// import { Statistics } from './Feedback/Statistics';
// import { Notification } from './Feedback/Notification';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { name } = this.state;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: name }],
      name: '',
    }));
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            value={name}
            onChange={this.handleChange}
            onSubmit={this.handleSubmitForm}
          />
        </Section>

        <Section title="Contacts"></Section>
      </>
    );
  }
}
