import React, {Component} from 'react';
import {connect} from "react-redux";

class LeftMenu extends Component{

    render(){
        const {questions, scoretotal} = this.props.calcul;
        return(
            <div className="card">
                <ul className={"list-group list-group-flush"}>
                    <li className={"list-group-item"}>
                        Nombre de question(s) restante(s) : {questions}
                    </li>
                    <li className={"list-group-item"}>Score: {scoretotal}</li>
                </ul>
            </div>
        )
    }



}
const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {};

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
