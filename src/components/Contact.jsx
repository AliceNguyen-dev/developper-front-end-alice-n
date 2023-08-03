import { useRef } from 'react';
import './Contact.css';
import Girl from '../assets/bf-footer.png';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oqumer1', 'template_e91i449', form.current, 'gtf8A5-3P1joZjbMG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="contact-main bg-header">
            <div className="contactApp">
                <h2 className="title-page">Contact</h2>
            </div>

            <div className="mesApp">
                <form ref={form} onSubmit={sendEmail} className=" formApp --form-control --card --flex-center --dir-column">
                    <div className='form-outline mb-4 tab-info'>
                        <input type="text" placeholder='Full Name' name="user_name" required />
                    </div>

                    <div className='form-outline mb-4 tab-info'>
                        <input type="text" placeholder='N° Mobile' name="user_mobile" required />
                    </div>

                    <div className='form-outline mb-4 tab-info'>
                        <input type="text" placeholder="Nom de l'Entreprise" name="name_entreprise" required />
                    </div>

                    <div className='form-outline mb-4 tab-info'>
                        <input type="email" placeholder='Email' name="user_email" required />
                    </div>

                    <div className='form-outline mb-4 tab-info'>
                        <input type="text" placeholder='Sujet' name="subject" required />
                    </div>

                    <div className='form-outline mb-4 tab-info'>
                        <textarea placeholder='Message' name="message" col="30" row="10" required></textarea>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className=" --btn --btn-primary btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-contact">
                            Envoyer le message
                        </button>
                    </div>

                </form>
            </div>


            {/* <div className="messApp">
                <form className="formApp" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" htmlFor="name">
                            Nom
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" htmlFor="mobile">
                            Mobile
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            value={mobile}
                            onChange={handleMobileChange}
                        />
                    </div>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="form-control form-control-lg"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-contact">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div> */}

            <div className="space-bas">
                <img className="imgG" src={Girl} alt="girl" />
            </div>
        </div>
    );
}

export default Contact;