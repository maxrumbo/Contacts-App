import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

function ContactItem({ imageUrl, name, tag, id, onDelete, animationIndex }) {
 const animationDelay = `${Math.min(animationIndex, 8) * 45}ms`;

 return (
   <div className="contact-item" style={{ '--item-delay': animationDelay }}>
     <ContactItemImage imageUrl={imageUrl} name={name} />
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}

export default ContactItem;