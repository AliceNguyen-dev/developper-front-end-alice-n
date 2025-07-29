import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Girl from '../assets/bf-footer.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    const serviceId = 'service_oqumer1';
    const templateId = 'template_d2c1qlu';
    const publicKey = 'gtf8A5-3P1joZjbMG';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      from_entreprise: entreprise,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setStatusMessage('Votre message a été envoyé avec succès !');
        setName('');
        setMobile('');
        setEntreprise('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatusMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact-main bg-header"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="text-head">
        <p className="title-contact">Contactez Moi</p>
        <p className="para-contact">Besoin d'un développeur full-stack pour donner vie à vos idées ? Je suis là pour vous aider à créer des applications web performantes et innovantes.</p>
      </div>

      {statusMessage && (
        <motion.div
          className={`status-message ${statusMessage.includes('succès') ? 'success' : 'error'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {statusMessage}
        </motion.div>
      )}

      <div className="mesApp">
        <form onSubmit={handleSubmit} className="emailForm formApp card-form flex-center dir-column">
          {/* Champ Nom complet */}
          <div className='form-group'>
            <label htmlFor="name" className="visually-hidden">Nom complet</label> {/* Added label */}
            <input
              type="text"
              id="name" // Link label to input
              placeholder='Nom complet'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Champ N° Mobile */}
          <div className='form-group'>
            <label htmlFor="mobile" className="visually-hidden">N° Mobile</label> {/* Added label */}
            <input
              type="tel" // Use type="tel" for phone numbers
              id="mobile" // Link label to input
              placeholder='N° Mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          {/* Champ Nom de l'Entreprise */}
          <div className='form-group'>
            <label htmlFor="entreprise" className="visually-hidden">Nom de l'Entreprise</label> {/* Added label */}
            <input
              type="text"
              id="entreprise" // Link label to input
              placeholder="Nom de l'Entreprise"
              value={entreprise}
              onChange={(e) => setEntreprise(e.target.value)}
              required
            />
          </div>

          {/* Champ Email */}
          <div className='form-group'>
            <label htmlFor="email" className="visually-hidden">Email</label> {/* Added label */}
            <input
              type="email"
              id="email" // Link label to input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Champ Message */}
          <div className='form-group'>
            <label htmlFor="message" className="visually-hidden">Message</label> {/* Added label */}
            <textarea
              id="message" // Link label to input
              placeholder='Message'
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="button-container">
            <motion.button
              type="submit"
              className="btn-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              disabled={isSending}
            >
              {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
            </motion.button>
          </div>
        </form>
      </div>

      {/* <div className="space-bas">
        <motion.img
          className="imgG"
          src={Girl}
          alt="Illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />
      </div> */}
    </motion.section>
  );
}

export default Contact;