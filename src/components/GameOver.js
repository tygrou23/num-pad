import React, {Component} from 'react';
import {connect} from "react-redux";

//other import from scripts
import {BestHightScoreAsync, getthebesthighscores, clearall} from "../actions/actions-types";
import BestHighScores from "./BestHighScores";

class GameOver extends Component{

    componentDidMount() {
        //get this.props
        const {BestHightScoreAsync} = this.props;
        //call the besthighscoreAsync
        BestHightScoreAsync();
    }

    render(){
        //get the clearall and totalscore from this.props (.calcul)
        const {clearall} = this.props;
        const {totalscore} = this.props.calcul;
        //print the GameOver page
        return(
            <div >
                <h1>GAME OVER</h1>
                <p className="lead">Your HighScore is : {totalscore}</p>
                    <BestHighScores/>
                <p >
                    <button className="btn btn-primary btn-lg" onClick={clearall}>PLAY AGAIN</button>
                </p>
            </div>
            )
        }
}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {clearall, BestHightScoreAsync, getthebesthighscores };

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)