import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message.length >= 10) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const isFormValid = formData.name && formData.email && formData.message.length >= 10;

  return (
    <section id="contact" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto', gap: '15px', marginTop: '30px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px' }}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px' }}
          rows="5"
        ></textarea>
        <button type="submit" disabled={!isFormValid} style={{ padding: '10px', cursor: isFormValid ? 'pointer' : 'not-allowed' }}>
          Submit
        </button>
      </form>
      {submitted && <p style={{ marginTop: '15px', color: 'green' }}>Message sent successfully!</p>}
    </section>
  );
};

export default Contact;