import React, {Component} from 'react';
import Keypadnumber from "./Keypadnumber";
import {connect} from "react-redux";
import {clearone, clearall, check} from "../actions/actions-types";

class Keypad extends Component{

    render(){
        //get the different action from this.props and assign to diff buttons
        const {clearone, clearall, check} = this.props;
        const {result, allQuestions, questions} = this.props.calcul;

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
                    <button className="btn btn-primary" 
                        disabled={! (parseInt(result) >= 0) } 
                        onClick={check}>Go!</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger"
                    disabled={! (parseInt(result) >= 0) }
                    onClick={clearone}>Clear Number</button>
                </div>
                <div className="row">
                    <button className="btn btn-danger"
                    disabled={ (questions === allQuestions) }
                    onClick={clearall}>Restart Game</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {clearone, check, clearall};

export default connect(mapStateToProps, mapDispatchToProps)(Keypad)
