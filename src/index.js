import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Componentes/Header/header';
import './Css/styleglobal.css';

//Components


class App extends Component {

    render() {

        return (
            <div>
                <Header/>
            </div>

        )

    }


}

ReactDOM.render(<App />, document.getElementById('root'));