import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
import './Contact.css'

import Girl from '../assets/bf-footer.png'

function Contact() {

    // const [name, setName] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = () => {
    //     if (name.length === 0) {
    //         alert("Veuillez remplir votre nom complet");
    //     }
    //     else if (mobile.length === 0) {
    //         alert("Veuillez remplir votre numéro mobile");
    //     }
    //     else if (email.length === 0) {
    //         alert("Veuillez remplir votre email");
    //     }
    //     else if (message.length === 0) {
    //         alert("Veuillez remplir votre message");
    //     }
    //     else {
    //         const url = 'http://localhost/Portfolio/portfolio_n_alice/formsubmit.php';
    //         let fData = new FormData();
    //         fData.append('name', name);
    //         fData.append('mobile', mobile);
    //         fData.append('email', email);
    //         fData.append('message', message);
    //         axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
    //     }
    // }



    return (
        <div className="contact-main bg-header">
            <div className="contactApp">
                <h2 className='title-page'>Contact</h2>
            </div>

            <div className="coord">

                <div className="sect1">
                    <div className="blocFlex">
                        <p className="sub-title">Mobile</p>
                        <p className="text-resu">06 05 45 96 95</p>
                    </div>

                </div>

                <div className="sect2">
                    <div className="blocFlex">
                        <p className="sub-title">Localisation</p>
                        <p className="text-resu">A Proximité du Parc Disneyland Paris ( RER A )</p>
                    </div>

                </div>

            </div>

            <div className="messApp">

                <form className='formApp'>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" for="name">Nom</label>
                        <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" for="mobile">Mobile</label>
                        <input type="text" className="form-control form-control-lg" />
                    </div>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" for="email">Email</label>
                        <input type="email" className="form-control form-control-lg" />
                    </div>
                    <div className="form-outline mb-4 tab-info">
                        <label className="form-label" for="message">Message</label>
                        <input type="text-area" className="form-control form-control-lg" />
                    </div>

                    {/* <div className="d-flex justify-content-center">
                        <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-contact" />
                    </div> */}

                </form>


            </div>

            <div className="space-bas">
                <img className='imgG' src={Girl} alt="girl" />
            </div>




        </div>
    );
}

export default Contact;
