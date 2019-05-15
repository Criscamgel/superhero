import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Componentes/Header/header';
import Grid from './Componentes/grid/grid';
import './Css/styleglobal.css';

//Components


class App extends Component {

    state = {
        respuesta:[]
    }

    respuestaApi = (respuesta) => {
        respuesta = JSON.parse(respuesta);
        this.setState({respuesta})
    }

    render() {

        return (
            <div>
                <Header respuestaApi={this.respuestaApi}/>
                <Grid respuesta={this.state.respuesta}/>
            </div>

        )

    }


}

ReactDOM.render(<App />, document.getElementById('root'));