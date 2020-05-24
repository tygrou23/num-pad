import {CLEAR_ONE, CLEAR_ALL, ADD_NUMBER, PREMIERE_QUESTION, VERIF} from '../constants/actions';
import {multiplicationalgo} from '../utils/multiplication.js'

const initAnswPop = {
    question:{
        question:'',
            result:''},
    correctAnswer: null
};
const NbQuestion = 10;
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

    let newQuestion;

    switch ( action.type) {
        case ADD_NUMBER:
            return {...state,result:parseInt(state.result.toString().concat(action.payload))};

        case CLEAR_ONE:
            console.log('delete number');
            return {...state,result:''};

        case PREMIERE_QUESTION:
            newQuestion = multiplicationalgo();
            console.log('créer une question', newQuestion);
            return {...state, question: newQuestion};

        case VERIF:
            console.log('Vérifier la réponse', parseInt(state.result)===parseInt(state.question.answer));
            const isGood = (state.result === state.question.answer);
            const question = state.question;

            return {...state, reponsePopup: {question: question, correctAnswer: isGood},
                question: multiplicationalgo(),
                scoretotal: isGood? state.scoretotal +1 : state.scoretotal,
                questions: state.questions -1,
                result: ''
            };

        case CLEAR_ALL:
            console.log('reset game');
            return {...state, questions:NbQuestion,
                question: multiplicationalgo(),
                scoretotal: 0,
                reponsePopup:initAnswPop,
                result:''
            };
        default:
            return state;
    }

}
