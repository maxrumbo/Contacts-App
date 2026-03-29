import React from 'react';

function DeleteButton({ id, onDelete }) {
  return <button type="button" className='contact-item__delete' aria-label="Hapus kontak" onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;