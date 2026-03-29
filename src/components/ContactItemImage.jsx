import React from 'react';

function ContactItemImage({ imageUrl, name }) {
 const [hasError, setHasError] = React.useState(false);
 const initial = (name || '?').trim().charAt(0).toUpperCase();

 return (
   <div className="contact-item__image">
     {hasError ? (
       <div className="contact-item__fallback" aria-hidden="true">{initial}</div>
     ) : (
       <img src={imageUrl} alt={`Avatar ${name}`} onError={() => setHasError(true)} />
     )}
   </div>
 );
}

export default ContactItemImage;