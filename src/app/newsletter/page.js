'use client'
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle newsletter signup
    alert(`Thank you for signing up with: ${email}`);
  };

  return (
    <div>
      <h1>Newsletter</h1>
      <p>Sign up for our weekly newsletter to stay updated!</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
