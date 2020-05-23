import React, {Component} from 'react';
import Keypadnumber from "./Keypadnumber";
import {connect} from "react-redux";
import {clearone, clearall, verif} from "../actions/actions-types";

class Pad extends Component{

    render(){
        const {clearone, clearall, verif} = this.props;
        const {result, questions, totalQuestions} = this.props.calcul;

        return(
            <div class="rowleft">
                <div class="row">
                    <div class="value1">
                        <Keypadnumber value={1}/>   
                    </div>
                
                    <div class="value2">
                        <Keypadnumber value={2}/>  
                    </div>
                    <div class="value3">
                        <Keypadnumber value={3}/>  
                    </div>
                </div>
                <div className="row">
                    <div class="value1">
                            <Keypadnumber value={4}/>   
                        </div>
                        <div class="value2">
                            <Keypadnumber value={5}/>  
                        </div>
                        <div class="value3">
                            <Keypadnumber value={6}/>  
                        </div>
                </div>
                <div className="row">
                    <div class="value1">
                            <Keypadnumber value={7}/>   
                        </div>
                        <div class="value2">
                            <Keypadnumber value={8}/>  
                        </div>
                        <div class="value3">
                            <Keypadnumber value={9}/>  
                        </div>
                </div>
                <div className="row">
                    <div class="value0">
                        <Keypadnumber value={0}/>  
                    </div>
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={verif}>Go!</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger" onClick={clearone}>Clear Number</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger" onClick={clearall}>Restart Game</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {clearone, verif, clearall};

export default connect(mapStateToProps, mapDispatchToProps)(Pad)
