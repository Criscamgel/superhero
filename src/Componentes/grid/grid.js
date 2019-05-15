import React, { Component } from 'react';
import Style from '../../Css/styleglobal.css';
import TarjetaHeroe from './tarjetaheroe';

class Grid extends Component {

    
    mostrarRespuesta = () => {

        let respuesta =  this.props.respuesta;
        this.props.respuesta.map((heroe, key)  => (
            heroe.like = false,
            heroe.disLike = false
        ));
        console.log(respuesta)
        if(respuesta.length === 0) return null;
        
        return(
            <React.Fragment>
                <div className={Style.gridObjetos}>
                {this.props.respuesta.map((heroe, key)  => (
                    <TarjetaHeroe
                    key={key}
                    heroe={heroe}
                    handleSelectHero={this.handleSelectHero}
                    />
                ))}
                </div>
            </React.Fragment>                
        )
    }    

    render(){
        return(
            <React.Fragment>{this.mostrarRespuesta()}</React.Fragment>
        )
    }

}

export default Grid;