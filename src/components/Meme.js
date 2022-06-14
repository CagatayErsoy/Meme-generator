import './Meme.css';
import React from 'react';
import Data from './Data'  


export default function Meme() {

  
  const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemeImages, setAllMemeImages] = React.useState(Data)
  function handleChance(event){
      const {name,value}=event.target
      setMeme(prevMeme=>({
          ...prevMeme,
          [name]: value
          
      }))
  }
  
  function getMemeImage() {
      const memesArray = allMemeImages.data.memes
      
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
      
  }
  
  return (
      <main>
          <div className="form">
             <div className="text-boxes">    
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChance}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                      onChange={handleChance}
                />
              </div> 
         
              <button 
                  className="button"
                  onClick={getMemeImage}
              >
                  Get a new meme image 🖼
              </button>
          </div>
          <div className="meme">
              <img src={meme.randomImage} className="memeImage" alt="memeImage" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
      </main>
  )
}