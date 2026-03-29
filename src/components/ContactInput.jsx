import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
      error: '',
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
        error: '',
      }
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
        error: '',
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const name = this.state.name.trim();
    const tag = this.state.tag.trim();

    if (!name || !tag) {
      this.setState({ error: 'Nama dan tag wajib diisi.' });
      return;
    }

    this.props.addContact({ name, tag });
    this.setState({ name: '', tag: '', error: '' });
  }

  render() {
   return (
     <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
       <label htmlFor="nameInput">Nama</label>
       <input id="nameInput" type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} required />
       <label htmlFor="tagInput">Tag</label>
       <input id="tagInput" type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} required />
       {this.state.error ? <p className="contact-input__error" role="alert">{this.state.error}</p> : null}
       <button type="submit">Tambah</button>
     </form>
   )
 }
}

export default ContactInput;
