import React, { useContext, Fragment } from 'react'
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import ContatcItem from './ContactItem'
import ContactContext from './../../context/contact/contactContext'
const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext

    if(contacts.length === 0) {
        return <h4> please add a contact  </h4>
    } 
    return (
        <Fragment>
        <TransitionGroup>
        { 
        filtered !== null  ? 
        
        filtered.map(contact => ( 
            <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContatcItem  key={contact.id} contact={contact} />
            </CSSTransition>
        )) 
        : 
        contacts.map( contact => (
            <CSSTransition key={contact.id} timeout={500} classNames="item">
            <ContatcItem  key={contact.id} contact={contact} />
            </CSSTransition>
            ))
        }
        </TransitionGroup>
        </Fragment>
        
    )
}

export default Contacts;
