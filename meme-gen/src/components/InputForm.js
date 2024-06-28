import React, { useState } from 'react'
import memeList from '../memes.js';
function InputForm() {
    let [memeImage,setMemeImage] = useState({
        topText :'',
        bottomText:'',
        url: memeList.data.memes[Math.floor(Math.random()*memeList.data.memes.length)].url})  
        console.log(memeImage.topText);
    // randomize an image from data
    const getMemeImage = ()=> {   
        let randomUrl =  memeList.data.memes[Math.floor(Math.random()*memeList.data.memes.length)].url
        setMemeImage(prevMemeImage => ({...prevMemeImage, url :randomUrl }))        
        console.log(memeImage)
    }
    function changeTopText(e) {
        setMemeImage(prevMemeImage => ({...prevMemeImage, topText : e.target.value}))
    }      

    return (
        <div className='form'>
            <div className='input-group'> 
                <div className='top-input'>
                    <label>Top text</label>
                    <input onChange = {(e) => changeTopText(e)}></input>
                </div>
                <div className='bottom-input'>
                    <label>Bottom text</label>
                    <input></input>
                </div>
            </div>
            <button onClick= {getMemeImage} className='gen-button'>Get a new meme image</button>
            <img className='gen-photo' src= {memeImage.url}alt='generated'></img>
        </div>        
    )
}

export default InputForm