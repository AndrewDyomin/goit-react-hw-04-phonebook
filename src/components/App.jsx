import { lazy } from "react";
import { GlobalStyle } from '../global-style';
import { SharedLayout } from "./sharedLayout/SharedLayout";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const BaseItems = lazy(() => import("pages/BaseItems"));
const CustomItems = lazy(() => import("pages/CustomItems"));

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
      setContacts(prevState => [...prevState, values]);
    };  
};

const changeFilter = searchValue => {
  setFilter(searchValue.target.value);
}

const handleDelete = (contactId) => {
  setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
};

const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <GlobalStyle />
      <AddContact create={createContact} />
      <div>
        <Filter onFilter={changeFilter} initValue={filter}/>
        <ContactList actual={actualContacts} onDelete={handleDelete}/>
      </div>
    </>
  );
};
