//import dependencies
import React, {Component} from 'react';
import {connect} from "react-redux";
//import from other scrips
import Keypad from "./Keypad";
import AlertMessage from "./AlertMessage";
import {firstquestion} from "../actions/actions-types";
//import leftMenus (containning SCORE  and NBquestion)
import LeftMenu from "./LeftMenus";

//define popup time on screen
var settimer = null;

class Createquestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Success : false
        };
    }

    //MOUNT component
    componentDidMount() {
        //Assign + get the variabl from "this.props"
        const {firstquestion}= this.props;
        const {state} = this.props.calcul;

        //display state of component
        console.log(state);
        //start firstquestion
        firstquestion();
    }

    // UPDATE component
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {questions, allQuestions, answerPopup} = this.props.calcul;

        if(prevProps.calcul.answerPopup !== answerPopup && questions !== allQuestions){
            console.log('PRINT DISPLAY');
            //set Success to true
            this.setState({Success: true});
            //set time of display and put Success to false
            settimer = setTimeout(() => 
                this.setState({Success: false})
                , 3000)
        }
    }

    //UNMOUNT Component
    componentWillUnmount() {
        //we will clear the settimer in order to make it timeout
        clearTimeout(settimer);
    }

    render() {

        //define const from this.props.calcul
        const {result, allQuestions, question, questions, answerPopup, } = this.props.calcul;

        //like asked we print the result in console.log HERE
        console.log(result);

        //we define a text in order to modifie in each case of if state
        var text ="";

        //if the game just start (so question = all the number of questions)
        if(questions === allQuestions){
            //we insert the number of question => here is 10
            text = `Vous avez ${questions} multiplications à faire. Utilisez les touches du clavier pour
            répondre.\n Que la force soit avec toi !`
        }
        //check if good answer
        else if(answerPopup.correctAnswer) {
            text = `Super! C'est la bonne réponse : ${answerPopup.question.question} ${answerPopup.question.answer}`;
        }
        //else its a bad answer !
        else {
            text = `Mauvaise réponse, la bonne réponse était : ${answerPopup.question.question} ${answerPopup.question.answer}`;
        }
            //return all fragement (header + game + scoring + nbquestion + leftmenus)
            return (
                <React.Fragment>
                    <div className={"container"}>
                        <header class="header">
                            <h1>Calcul mental GUILLOUZIC E5DWM !</h1>
                        </header>
                        <main>
                            <div className={"row"}>
                                <div className={"col-7"}>
                                    { this.state.Success &&
                                    <AlertMessage color={answerPopup.correctAnswer ? 'success' : 'danger' }>
                                        {answerPopup.correctAnswer? 'Bravo!' : 'Raté...'}
                                    </AlertMessage>
                                    }
                                    <AlertMessage>
                                        {text}
                                    </AlertMessage>
                                    <AlertMessage>
                                        Calculez: {question.question} {result}
                                    </AlertMessage>
                                    <Keypad/>
                                </div>
                                <div className={"col-4"}>       
                                    <LeftMenu/>
                                </div>
                            </div>
                        </main>
                    </div>
                </React.Fragment>
            );
        } 
}

const mapStateToProps = (state) =>{return {...state }};
const mapDispatchToProps =  {firstquestion};

export default connect(mapStateToProps, mapDispatchToProps)(Createquestion)
