import React, { useRef, useState } from 'react';
import './Contact.css';
import Girl from '../assets/bf-footer.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_oqumer1';
    const templateId = 'template_d2c1qlu';
    const publicKey = 'gtf8A5-3P1joZjbMG';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      from_entreprise: entreprise,
      // to_name: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setMobile('');
        setEntreprise('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="contact-main bg-header">
      {/* ... the rest of your code ... */}

      <div className="mesApp">
        <form onSubmit={handleSubmit} className="emailForm formApp --form-control --card --flex-center --dir-column">
          <div className='form-outline mb-4 tab-info'>
            <input type="text" placeholder='Nom complet' value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className='form-outline mb-4 tab-info'>
            <input type="text" placeholder='N° Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>

          <div className='form-outline mb-4 tab-info'>
            <input type="text" placeholder="Nom de l'Entreprise" value={entreprise} onChange={(e) => setEntreprise(e.target.value)} required />
          </div>

          <div className='form-outline mb-4 tab-info'>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>


          <div className='form-outline mb-4 tab-info'>
            <textarea placeholder='Message' cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="--btn --btn-primary btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-contact">
              Envoyer le message
            </button>
          </div>
        </form>
      </div>


        <div className="space-bas">
            <img className="imgG" src={Girl} alt="girl" />
        </div>
    </div>



















    //   <form onSubmit={handleSubmit} className='emailForm'>
    //     <input
    //       type="text"
    //       placeholder="Your Name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="email"
    //       placeholder="Your Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <textarea
    //       cols="30"
    //       rows="10"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //     >
    //     </textarea>
    //     <button type="submit">Send Email</button>
    //   </form>
    )
  }

export default Contact;