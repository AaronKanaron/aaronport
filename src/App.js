import "./App.scss";

import Header from "./components/molecules/header";
import Cursor from "./components/atoms/cursor";
import CanvasComponent from "./components/atoms/canvas";
import SVGMask from "./components/atoms/svgmorph";

import React, { useEffect, useRef, useState } from "react";

const App = () => {

	return (
		<div className="App">
			<Header ></Header>
			<section className="hero" id={1}>
				<p> Hello, I'm</p>
				<div className="hero__container">
					<h1 className="name">
						Aaron
						<br />Alexander Clauss
					</h1>
					<h2 className="title">Frontend dev,</h2>
				</div>
				<p>From Stockholm, Sweden </p>
			</section>
			<section id={2}></section>

			{/* <Cursor /> */}
			{/* <SVGmorph /> */}
			<CanvasComponent />
			<SVGMask />
			{/* <SVGCover /> */}
		</div>
	);
};

export default App;
