import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const handleOnClick = function() {
        const meme = memesData.data.memes[Math.floor(Math.random()*memesData.data.memes.length)];
        console.log(meme.url);
    };
    
    return(
        <div className="meme">
                <div className="meme--inputs">
                    <input type="textInput" id="input1" className="meme--input" defaultValue="Shut up"></input>
                    <input type="textInput" className="meme--input" defaultValue="and take my money"></input>
                </div>
                <button
                    className="meme--btn"
                    onClick={handleOnClick}>
                    Get a new meme image  🖼
                </button>
        </div>
    )
}