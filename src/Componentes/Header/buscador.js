import React, { Component } from 'react';
import '../../Css/styleglobal.css';
import FontAwesome from 'react-fontawesome';


class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Leyendo el valor

        const palabra = this.busquedaRef.current.value;
        this.props.datosBusqueda(palabra);
    }

    render() {

        return (

            <div>
                <form onSubmit={this.obtenerDatos}>
                   <input ref={this.busquedaRef} type="search" placeholder="Busqueda..."></input>
                   <button type="submit"><FontAwesome name="search"/></button> 
                </form>                
            </div>

        )

    }
}

export default Buscador;