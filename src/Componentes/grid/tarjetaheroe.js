import React, { Component } from 'react';
import Style from '../../Css/styleglobal.css';
import '../../Css/styleglobal.css'; 
import Fontawesome from 'react-fontawesome';
import Modal from 'react-awesome-modal';

class TarjetaHeroe extends Component {

    //Destructuring
    //const { picture, name, publisher, info } = props.heroe;

    state = {
        visible: false,
        heroeSelected: {
            like: false,
            disLike: false    
        }               
    }

    componentDidMount(){
        const heroeSelectedLs = localStorage.getItem("heroeSelected");
        
        if(heroeSelectedLs){
            this.setState({
                heroeSelected: JSON.parse(heroeSelectedLs)
            })
        }
    }

    componentDidUpdate(){
        
        localStorage.setItem(
            'heroeSelected',
            JSON.stringify(this.state.heroeSelected)  
        )  
    }

    //Modal

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    passHeroe = () => {

        this.props.heroe.like = true;

        this.setState({
            heroeSelected: this.props.heroe
        })
    }

    handleLike = () => {
        this.setState({
            like:!this.state.heroeSelected.like
        })
    }

    render() {

        return (
            <div heroeSelected={this.state.heroeSelected}>
            <div className={Style.cardCont}>
                <div className={Style.cardTitle}>
                    <h3>{this.props.heroe.name}</h3>
                    <p>{this.props.heroe.publisher}</p>
                </div>
                <div className={Style.card} style={{ backgroundImage: `url(${this.props.heroe.picture})` }}>
                    <div className={Style.btnGrid}>
                        <div className={Style.iconCirclePlus} onClick={() => this.openModal()}><Fontawesome name="plus" /></div>
                        <input className={Style.iconCircleHeart} onClick={() => this.passHeroe()} onChange={() => this.handleLike()} defaultChecked={this.state.heroeSelected.like} type="checkbox" />
                        <input className={Style.iconCircleBad} onClick={() => this.passHeroe()} onChange={() => this.handleLike()} defaultChecked={this.state.heroeSelected.disLike} type="checkbox" />
                    </div>
                </div>
            </div>            
                <Modal className={Style.modal} visible={this.state.visible} width="90%" height="440" effect="fadeInUp" onClickAway={() => this.closeModal()}>

                    <a className={Style.closeModal} href="javascript:void(0);" onClick={() => this.closeModal()}><Fontawesome name="times" /></a>
                    <div className={Style.gridHeader}>
                        <h2 className={Style.tittleModal}>Nombre: {this.props.heroe.name}</h2>
                        <p className={Style.publisherModal}>{this.props.heroe.publisher}</p>
                    </div>
                    <div className={Style.gridModal}>
                        <div className={Style.imgModal} style={{ backgroundImage: `url(${this.props.heroe.picture})` }}></div>
                        <p className={Style.infoModal}>{this.props.heroe.info}</p>
                    </div>
                </Modal>
            </div>


        );
    }
}

export default TarjetaHeroe;