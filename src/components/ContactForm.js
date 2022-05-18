import { useEffect, useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({})
  const [terms, setTerms] = useState(false)
  const [validForm, setValidForm] = useState(false)

  const formData = {
      firstName: firstName,
      lastNme: lastName,
      terms: terms,
    }
     
useEffect(() => {
    if(formData.firstName && formData.lastName && formData.terms) {
        setValidForm(true)}
},[formData.firstName, formData.lastName, formData.terms])
  
const sendData = (event) => {
    event.preventDefault() // do not refresh page
    
    fetch('https://api.sampleapis.com/coffee/hot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log('Success:', data))
    .catch(err => console.error(err))
}

const setFormObject = (event) => {
    // setFormData(event.target.value)
    setFormData({ ...formData, [event.target.name]: event.target.value})
}



    return (
    <>
     <form method="post">
      <label>
       First Name:  
       <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        // onChange={event => setFormData( {...formData, firstName: event.target.value} )} />
        onChange={event => setFormObject(event)} />
      </label>
      
      <br />
      <label>
        Last Name:  
        <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        onChange={event => setFormObject(event)} />
      </label>

      <br />
      <label>
        Address: 
        <input 
        type="text" 
        name="address" 
        onChange={event => setFormObject(event)} />
      </label>

      <br />
      <label>
        Zip: 
        <input 
        type="text" 
        name="zip" maxLength={5} 
        onChange={event => setFormObject(event)} />
      </label>

      <br />
      <label>
       State:  
       <select name="state">
          <option value=""></option>
          <option value="il">IL</option>
          <option value="ny">NY</option>
          <option value="nj">NJ</option>
       </select>
      </label>

      <br />
      <label>
        Date:
        <input type="date" name="date" />
      </label>

      <br />
      <label>
        Terms and conditions
        <input type="checkbox" onChange={event => setFormObject(event)}/>
      </label>
      <br />

      <label>message:
          <textarea name="message" cols="30" rows="10" onChange={event => setFormObject(event)}/>
      </label>
        <button onClick={ e => sendData(e)} disabled={validForm}>
            Submit
        </button>
    </form>
    </>
    )
}


