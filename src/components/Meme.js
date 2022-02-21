import './Meme.css';
import React from 'react';
import Data from './Data'  


function Meme() {
  let url
  const memes=Data.data.memes
  function randomImage(e){
    e.preventDefault();
    
  const random=memes[Math.floor(Math.random()*memes.length)]
  url=random.url
 
}
  return (
    <form className='meme'>
      <p >{url}</p>
        <div className='form'>
       <input type="text" placeholder='Shut Up'/>
       <input type="text" placeholder='take my money'/>
       </div>
       <button  className="button" onClick={randomImage}> Get a new meme image &#128444;</button>
    </form>
  );
}

export default Meme;