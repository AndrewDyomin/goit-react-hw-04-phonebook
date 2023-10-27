import { lazy } from "react";
import { GlobalStyle } from '../global-style';
import { Component } from "react";
import { AddContact } from './newContact/NewContact';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const App = () => {
const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return(parsedContacts);
    };
});
const [filter, setFilter] = useState('');

useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts])

const createContact = (values) => {
  const targetContact = contacts
    .map((cont) => cont.name.toLowerCase())
    .includes(values.name.toLowerCase());

    if (targetContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, values],
        };
      });
  };
};

changeFilter = searchValue => {
  this.setState({filter: `${searchValue.target.value}`});
}

handleDelete = contactId => {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    };
  });
};

const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <GlobalStyle />
      <AddContact create={this.createContact} />
      <div>
        <Filter onFilter={changeFilter} initValue={filter}/>
        <ContactList actual={actualContacts} onDelete={handleDelete}/>
      </div>
    </>
  );
};