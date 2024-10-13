'use client'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.contactSection}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us with any questions or inquiries.</p>

        {/* Form Section */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        {/* Confirmation Message */}
        {submitted && (
          <div className={styles.confirmationMessage}>
            <p>Thank you for contacting us! We'll get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
