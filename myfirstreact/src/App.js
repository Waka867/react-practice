import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';



const helloWorldStyling = {

	textAlign: 'center'

}



class App extends Component {
	render() {

		return(
			<div className="App"> 
				<h1 style={helloWorldStyling}>Waka Waka!!</h1>
			</div>
		);
	}
}

export default App;
