import React, { Component } from 'react';

class Componente_contador_click extends Component {
	constructor(props){
		super(props);

		this.state = {
			somouClick: this.props.contadorClick
		}
	}

	render(){
		return(
			<div className="component">
				<h1>{this.state.somouClick}</h1>

				{/*<button onClick={fn_somar()}>Somar Tempo</button>*/}
				{/*<button onClick={function(){ this.state.somouClick + 1}}>Somar Tempo</button>*/}
				<button onClick={
					() => {
						this.setState({
							somouClick: this.state.somouClick + 1
						})
					}
				}>Somar Tempo</button>
			</div>

		);
	}
}

export default Componente_contador_click;