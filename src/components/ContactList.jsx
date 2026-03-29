import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete, viewMode }) {
  if (contacts.length === 0) {
    return <p className="contact-list__empty">Belum ada kontak.</p>;
  }

  return (
    <div className={`contact-list contact-list--${viewMode}`}>
      {
        contacts.map((contact, index) => (
          <ContactItem 
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          animationIndex={index}
          {...contact} />
        ))
      }
    </div>
  );
}

export default ContactList;