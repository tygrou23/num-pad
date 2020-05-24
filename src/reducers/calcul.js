//import DIFF const from actions
import {CLEAR_ONE, CLEAR_ALL, ADD_NUMBER, PREMIERE_QUESTION, VERIF} from '../constants/actions';
//import the multiplication algo (calculatrice) from the utils
import {multiplicationalgo} from '../utils/multiplication.js'

//we defins the initial pop up message from the user (set it to empty)
const initAnswPop = {
    question:{
        question:'',
            result:''},
    correctAnswer: null
};
//we defins the Nbquestion players need to player befor FinPartie
const NbQuestion = 10;
//we defins the state init from the game and set all information to it
const stateinit = {
    result: '',
    scoretotal:0,
    questions: NbQuestion,
    allQuestions: NbQuestion,
    question :{
        question:'',
        result:''
    },
    reponsePopup:initAnswPop
};

export default (state = stateinit, action = {}) => {
    //defins the nouvelle question var in order to input it from different switch case
    var nouvelleQuestion;

    //defins the switch in diff situation
    switch ( action.type) {

        //case if WE ADD NUMBER 
        case ADD_NUMBER:
            return {...state,result:parseInt(state.result.toString().concat(action.payload))};

        //case PREMIERE QUESTION IS PRINT so we change the printing message to nouvelle question
        case PREMIERE_QUESTION:
            nouvelleQuestion = multiplicationalgo();
            console.log('CREATE A NEW QUESTION', nouvelleQuestion);
            return {...state, question: nouvelleQuestion};

        //case WE PRESS GO TO VERIF RESULT AND GOOD ANSWER
        case VERIF:
            console.log('WE CHECK THE ANSWER RESULT', parseInt(state.result)===parseInt(state.question.answer));
            const isGood = (state.result === state.question.answer);
            const question = state.question;

            return {...state, reponsePopup: {question: question, correctAnswer: isGood},
                //we call the multiplication algo and then we add to score
                question: multiplicationalgo(),
                scoretotal: isGood? state.scoretotal +1 : state.scoretotal,
                questions: state.questions -1,
                result: ''
            };
    
        //case WE CLEAR NUMBER
        case CLEAR_ONE:
            console.log('SUPP NUMBER');
            return {...state,result:''};
        
        //case WE RESTART THE GAME
        case CLEAR_ALL:
            console.log('RESART ALL THE GAME');
            return {...state, questions:NbQuestion,
                //call the multiplication algo and set all like in the start of the game
                question: multiplicationalgo(),
                scoretotal: 0,
                reponsePopup:initAnswPop,
                result:''
            };
        //other case
        default:
            return state;
    }
}
