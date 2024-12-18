import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    
emailjs.init({ publicKey: 'P223kx-dBCfwIhEgC' }); 


const sendEmail = (e) => {
    e.preventDefault();     
    
    emailjs.sendForm('service_6szwptv', 'template_t6menqo', form.current, 'P223kx-dBCfwIhEgC')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });

    };


    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities. However, if you have any other requests or
                        questions, don't hesitate to contact me using the form below.
                    </p>
                    <div className="contact-form">
                     <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder='Email' 
                                    required 
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message" 
                                    name="message" 
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                     </form>
                   </div>
            </div>
        </div>
            <Loader type="pacman" />
        </>
    );
}

export default Contact;