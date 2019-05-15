import React, { Component } from 'react';
/* import Buscador from './buscador'; */
import Style from '../../Css/styleglobal.css';
import axios from 'axios';

class Header extends Component {

    state = {
        palabra: '',
        respuesta: ''
    }

    componentWillMount = () => {
        axios.get('http://35.162.46.100/superheroes/')
            .then(response => {
                //Limpiando Respuesta
                let respuesta = response.data;
                let num = respuesta.indexOf('[');
                respuesta =  respuesta.slice(num, respuesta.length);
                num = respuesta.indexOf('<');
                respuesta =  respuesta.slice(0, num);

                //Enviando Respuesta a Index.js                
                this.props.respuestaApi(respuesta);
                //

                this.setState({
                    respuesta
                })                
            })            
    }   
    

    datosBusqueda = (palabra) => {
        this.setState({
            palabra
        })
    }    

    render() {
        return (
            <div className={Style.contHeader}>
                <div className={Style.topBar} > Bienvenido al visor de Super Heroes </div>
                <div className={Style.contBuscador}>
                    <h3 className={Style.title}>- SuperHero -</h3>
                    {/* <Buscador
                        datosBusqueda={this.datosBusqueda}
                    /> */}
                </div>
            </div>  
        )
    }
}

export default Header;