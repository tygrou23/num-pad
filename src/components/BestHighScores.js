import React, {Component} from 'react';
import {connect} from "react-redux";

class BestHighScores extends Component {

    render(){
        
        //get the props.score =>
        const {highScores} = this.props.score;
        console.log("this.props.score", this.props.score);

        //if we got highscore not empty we print all the hightscores
        if (highScores.length > 0)
            return(
                <div>
                    <h2>Best HighScores</h2>
                    <ul className="list-group list-group-flush ">
                        {highScores.map((score,index)=>
                            <li className="list-group-item d-flex justify-content-between align-items-center"
                                    key={index}>
                                {score.name} <span>{score.highScore} POINTS</span>
                            </li>
                        )}
                    </ul>
                </div>
            );
        else
            return (
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading Best Hightscore Page...</span>
                </div>
            )
    }

}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  { };

export default connect(mapStateToProps, mapDispatchToProps)(BestHighScores)