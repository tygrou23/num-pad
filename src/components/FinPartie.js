import React, {Component} from 'react';
import {BestHightScoreAsync, getHighScores, clearall} from "../actions/actions-types";
import {connect} from "react-redux";
import BestHighScores from "./BestHighScores";

class FinPartie extends Component{

    componentDidMount() {
        //get this.props
        const {BestHightScoreAsync} = this.props;
        //call the besthighscoreAsync
        BestHightScoreAsync();
    }

    render(){
        const {clearall} = this.props;
        const {scoretotal} = this.props.calcul;
        return(
            <div >
                <h1 className="display-4">GAME OVER</h1>
                <p className="lead">Your HighScore is : {scoretotal}</p>
                    <BestHighScores/>
                <hr className="my-4"/>
                <p >
                    <button className="btn btn-primary btn-lg"
                    onClick={clearall}
                    >PLAY AGAIN</button>
                </p>
            </div>
            )
        }
}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {clearall, BestHightScoreAsync, getHighScores };

export default connect(mapStateToProps, mapDispatchToProps)(FinPartie)