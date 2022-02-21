import './Header.css';
import React from 'react';

function Header() {
  return (
    <nav className="">
     <section>
     <img src="https://img.icons8.com/doodle/48/000000/trollface.png" alt="trollface"/>
    <p className='memegen'>Meme Generator</p>
     </section>
     <p className='right-writing'>React Course-Project</p>
    </nav>
  );
}

export default Header;