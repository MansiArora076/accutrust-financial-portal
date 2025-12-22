import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    project: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error sending message.');
        }
    };

    return (
        <>
            <Header />
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-primary">Contact</li>
                    </ol>
                </div>
            </div>

            <div className="container-fluid contact bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary">Contact Us</h4>
                        <h1 className="display-4 mb-4">If you have any comments please apply now</h1>
                    </div>
                    <div className="row g-5">
                        {/* Left Image */}
                        <div className="col-xl-6">
                            <div className="contact-img d-flex justify-content-center">
                                <div className="contact-img-inner">
                                    <img src="assets/img/contact-img.png" className="img-fluid w-100" alt="Contact" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-xl-6">
                            <div>
                                <h4 className="text-primary">Send Your Message</h4>
                                <p className="mb-4">Fill the form below and we will get back to you shortly.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control border-0"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="phone">Your Phone</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="project"
                                                    name="project"
                                                    placeholder="Project"
                                                    value={formData.project}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="project">Your Project</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control border-0"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control border-0"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    name="message"
                                                    style={{ height: '120px' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary w-100 py-3">Send Message</button>
                                        </div>

                                        <div className="col-12">
                                            <p className="text-success mt-2">{status}</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Other Contact Info / Map */}
                        {/* ...You can keep your existing info and iframe here */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
