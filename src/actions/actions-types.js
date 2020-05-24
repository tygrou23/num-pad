//import dependancies
import { ADD_NUMBER, VERIF, PREMIERE_QUESTION, CLEAR_ONE, CLEAR_ALL, SEND_SCORE, GET_HIGHSCORES } from "../constants/actions";

//creation of addnumber usage
export const addnumber = (payload) =>{
    return {
        type : ADD_NUMBER, payload
    }
};

//creation of verif usage
export const verif = () =>{
    return {
        type : VERIF,
    }
};

//creation of premierequestion usage
export const premierequestion = () =>{
    return {
        type : PREMIERE_QUESTION,
    }
};

//creation of clearone usage
export const clearone = () =>{
    return {
        type : CLEAR_ONE,
    }
};

//creation of clearallgame usage
export const clearall = () => {
    return {
        type : CLEAR_ALL,
    }
};


//scoreing and fin de partie

export const submitScore = (payload)=>{
    return {
        type : SEND_SCORE, payload
    }
};

export const getHighScores = (payload)=>{
    return {
        type : GET_HIGHSCORES, payload
    }
};

export const fetchHighScoresAsync = () =>{

    const highscores = [
        {name: "test", highScore: 10},
        {name: "test1", highScore: 8},
        {name: "test2", highScore: 8},
        {name: "test13", highScore: 7},
        {name: "test14", highScore: 5}
    ];

    return dispatch => {

        setTimeout(()=>{
            console.log('ENTER THE DISPATCH get hightscore');
            dispatch(getHighScores(highscores))
        },2000);
    }
};



