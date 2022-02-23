import './Meme.css';
import React from 'react';
import Data from './Data'  


function Meme() {
  const [meme,setMeme]=React.useState({
    topText: "",
    bottomText:"",
    randomImage:""
  })
 

  let url
  const memesImage=Data.data.memes
  function getrandomImage(e){
    e.preventDefault(); 
  const random=memesImage[Math.floor(Math.random()*memesImage.length)]
  url=random.url
  setMeme(prevState=> ({
    ...prevState,
    randomImage:url
  }))
  
}
  return (<div className='wrapper'>
    <form className='meme'>
        <div className='form'>
       <input type="text" placeholder='Shut Up'/>
       <input type="text" placeholder='take my money'/>
       </div>
       <button  className="button" onClick={getrandomImage}> Get a new meme image &#128444;</button>
    </form>
    <img src={meme.randomImage} alt="meme" className='memeImage'/>
    </div>
  );
}

export default Meme;