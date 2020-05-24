import React, {Component} from 'react';
import {connect} from "react-redux";

//defins a left menu class in order to inform the user how many question are left playable and his user score
class LeftMenu extends Component{

    render(){
        //get the questions number and scoretotal of the user from this.props.calcul
        const {questions, scoretotal} = this.props.calcul;
        return(
            <div className="card">
                <ul className={"list-group-flush list-group"}>
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
