import React from 'react'

const Contact = ()=>{
  const [firstName, setFirstName]=React.useState('');
  const [lastName, setLastName]=React.useState('');
  const [email, setEmail]=React.useState('');
  const [phone, setPhone]=React.useState('');

  const handleSubmit=(event)=>{
    alert('Contact details:' + firstName + ' ' + lastName + ' ' + email + ' ' + phone);

    event.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }

  const fieldStyle={
    marginBottom:"5px"
  };

  return(
    <form onSubmit={handleSubmit}>
      <h1 style={{color:"blue"}}>Contact:</h1>
      <input type="text" style={fieldStyle} placeholder="First Name"
        value={firstName} onChange={function (e){setFirstName(e.target.value)}}/>
      <br/>
      <input type="text" style={fieldStyle} placeholder="Last Name"
        value={lastName} onChange={e=>setLastName(e.target.value)}/>
      <br/>
      <input type="text" style={fieldStyle} placeholder="Phone"
        value={phone} onChange={e=>setPhone(e.target.value)}/>
      <br/>
      <input type="email" style={fieldStyle} placeholder="Email"
        value={email} display="block" onChange={e=>setEmail(e.target.value)}/>
      <br/>
      <hr/>
      <input type="submit" value="Show Contact Details" display="inline-block"/>
    </form>
  );
}

export default Contact;