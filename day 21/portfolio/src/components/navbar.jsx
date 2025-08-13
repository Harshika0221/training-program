import React from 'react';
import ThemeToggle from './toggletheme';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: 'var(--secondary-light)' }}>
      <div>
        <a href="#home">Home</a>
        <a href="#skills" style={{ marginLeft: '15px' }}>Skills</a>
        <a href="#projects" style={{ marginLeft: '15px' }}>Projects</a>
        <a href="#contact" style={{ marginLeft: '15px' }}>Contact</a>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;