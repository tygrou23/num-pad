import React, {Component} from 'react';
import {fetchHighScoresAsync, getHighScores, clearall} from "../actions/actions-types";
import {connect} from "react-redux";
import HighScores from "./HighScores";

class GameOver extends Component{

    componentDidMount() {
        const {fetchHighScoresAsync} = this.props;
        fetchHighScoresAsync();
    }

    render(){
        const {score} = this.props.calcul;
        const {clearall} = this.props;
        return(
            <div className="jumbotron">
                <h1 className="display-4">Partie Terminée!!</h1>
                <p className="lead">Votre score: {score}</p>
                <HighScores/>
                <hr className="my-4"/>
                <p className="lead">
                    <button className="btn btn-primary btn-lg"
                    onClick={clearall}
                    >Rejouer</button>
                </p>

            </div>

            )
        }

}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {clearall, fetchHighScoresAsync, getHighScores };

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)