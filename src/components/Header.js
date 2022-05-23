import React from "react";
import logo from "./../img/TrollFace.png"

export default function Header() {
	return(
		<div className="header">
			<div className="header--logo">
				<img src={logo}></img>
				<h2 className="header--title">Meme Generator</h2>
			</div>
			<p className="header--text">React Course - Project 3</p>
		</div>
	)
}