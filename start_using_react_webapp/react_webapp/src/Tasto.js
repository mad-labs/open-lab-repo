import React, {Component} from 'react';

class Tasto extends Component {

    constructor(){
        super();
        this.nomww = 'ciaone!';
        this.kissene = this.kissene.bind(this);
    }

    kissene(e){
        console.log('e.target:='  + e.target);
        alert(':*');
    }
 
    render(){
        return (
            <button 
                onMouseOver={this.kissene}
                onClick={this.kissene}
                >
            I <span> {this.props.children} </span> 
                    {this.props.nome}
            </button>
        );
    }
}

Tasto.propTypes = {
    nome: React.PropTypes.string.isRequired
}

export default Tasto;
