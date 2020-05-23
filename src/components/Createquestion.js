//import dependencies
import React, {Component} from 'react';
import {connect} from "react-redux";
//import from other scrips
import Keypad from "./Keypad";
import Alertmessage from "./Alertmessage";
import {premierequestion} from "../actions/actions-types";
//import leftMenus (containning SCORE  and NBquestion)
import LeftMenu from "./LeftMenus";

//define a settimer in order to define popup time on screen
var settimer = null;

class Createquestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            affichageGood : false
        };
    }

    //MOUNT component
    componentDidMount() {
        //on assigne + récupere les variable depuis "this.props"
        const {premierequestion}= this.props;
        const {state} = this.props.calcul;

        //on affiche letat du component
        console.log(state);
        //on lance la premierequestion
        premierequestion();
    }

    // UPDATE component
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {questions, allQuestions, reponsePopup} = this.props.calcul;

        if(prevProps.calcul.reponsePopup !== reponsePopup && questions !== allQuestions){
            console.log('PRINT AFFICHAGE');
            //affichageGood à true
            this.setState({affichageGood: true});
            //on définis le temps d'affichage ici
            settimer = setTimeout(() => 
                this.setState({affichageGood: false})
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
        const {result, allQuestions, question, questions, reponsePopup, } = this.props.calcul;

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
        else if(reponsePopup.correctAnswer) {
            text = `Super! C'est la bonne réponse : ${reponsePopup.question.question} ${reponsePopup.question.answer}`;
        }
        //else its a bad answer !
        else {
            text = `Mauvaise réponse, la bonne réponse était : ${reponsePopup.question.question} ${reponsePopup.question.answer}`;
        }
            //return all fragement (header + game + scoring + nbquestion)
            return (
                <React.Fragment>
                    <div className={"container"}>
                        <header class="header">
                            <h1>Calcul mental GUILLOUZIC E5DWM !</h1>
                        </header>
                        <main>
                            <div className={"row"}>
                                <div className={"col-7"}>
                                    { this.state.affichageGood &&
                                    <Alertmessage color={reponsePopup.correctAnswer ? 'success' : 'danger' }>
                                        {reponsePopup.correctAnswer? 'Bravo!' : 'Raté...'}
                                    </Alertmessage>
                                    }
                                    <Alertmessage>
                                        {text}
                                    </Alertmessage>
                                    <Alertmessage>
                                        Calculez: {question.question} {result}
                                    </Alertmessage>
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
const mapDispatchToProps =  {premierequestion};

export default connect(mapStateToProps, mapDispatchToProps)(Createquestion)
