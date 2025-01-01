// contact page with emailjs
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css';
import config from './config';

const Contact = () => {
    const form = React.useRef();
    const [formStatus, setFormStatus] = useState({
        message: '',
        type: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        try {
            emailjs.init(config.emailjs.publicKey);
            console.log('EmailJS initialized');
        } catch (error) {
            console.error('EmailJS initialization error:', error);
        }
    }, []);

    const sendEmail = async (event) => {
        event.preventDefault();
        if (!form.current || isSubmitting) return;

        setIsSubmitting(true);
        setFormStatus({ message: 'Sending message...', type: 'loading' });

        try {
            console.log('Sending email with config:', {
                serviceId: config.emailjs.serviceId,
                templateId: config.emailjs.templateId,
                publicKey: config.emailjs.publicKey
            });

            await emailjs.sendForm(
                config.emailjs.serviceId,
                config.emailjs.templateId,
                form.current,
                config.emailjs.publicKey
            );

            setFormStatus({ message: 'Message sent successfully!', type: 'success' });
            form.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setFormStatus({ 
                message: 'Failed to send message. Please try again.', 
                type: 'error' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group mb-3">
                        <input 
                            type="text" 
                            name="from_name" 
                            className="form-control" 
                            placeholder="Your Name" 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input 
                            type="email" 
                            name="reply_to" 
                            className="form-control" 
                            placeholder="Your Email" 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input 
                            type="text" 
                            name="subject" 
                            className="form-control" 
                            placeholder="Subject" 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <textarea 
                            name="message" 
                            className="form-control" 
                            rows="4"
                            placeholder="Your Message" 
                            required
                        ></textarea>
                    </div>
                    <div className="form-submit">
                        <button 
                            type="submit" 
                            className="btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                {formStatus.message && (
                    <div className={`status-message ${formStatus.type}`}>
                        {formStatus.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
