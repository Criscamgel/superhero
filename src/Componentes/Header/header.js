import React, {Component} from 'react';
import Buscador from './buscador';
import Style from '../../Css/styleglobal.css';

class Header extends Component {
    render() {
        return (
            <div>
            <div className={Style.topBar}> Bienvenido al visor de Super Heroes </div>
            <Buscador/>
            </div>
        )
    }
}

export default Header;