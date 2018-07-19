import React, { Component } from 'react';

class Componente_contador_tempo extends Component {
	constructor(props){
		super(props);

		this.state = {
			cont: this.props.contador
		}
	}

  render() {
	// setTimeout(alert(),1000);
	setTimeout(
		() => {
			this.setState({
				cont: this.state.cont + 1
			})
	}, 1000);

	// teoricamente acredito que seja igual a funçao ES6 de cima, porem a de baixo não funciona não sei porque, verificar
	/*setTimeout(
		function(){
			this.setState({
				cont: this.state.cont + 1
			})
		}, 
	1000);*/

    return (
      <div className="component">
        <h1>{this.state.cont}</h1>
      </div>
    );
  }
}

export default Componente_contador_tempo;
