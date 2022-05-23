import React from "react";

export default function Meme() {
    return(
        <div className="meme">
                <div className="meme--inputs">
                    <input type="textInput" id="input1" className="meme--input" defaultValue="Shut up"></input>
                    <input type="textInput" className="meme--input" defaultValue="and take my money"></input>
                </div>
                <input type="button" value="Get a new meme image  🖼" className="meme--btn"></input>
        </div>
    )
}