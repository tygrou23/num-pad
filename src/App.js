import React, {Component} from 'react';

import './App.css';
import Createquestion from './components/Createquestion';
import {connect} from "react-redux";
import GameOver from "./components/GameOver";
class App extends Component {

    render() {
      //we check the number of question
      const {questions} = this.props.calcul;
      //if number of question is > 0 we print Createquestion
      if(questions>0)
          return (<Createquestion/>);

      //then return GameOver (cause number of question = 0), so we print all the highscore
        return(
        <div className={"container"}>
          <GameOver/>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
