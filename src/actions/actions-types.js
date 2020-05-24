//import dependancies
import { ADD_NUMBER, VERIF, PREMIERE_QUESTION, CLEAR_ONE, CLEAR_ALL,  SEND_SCORE, GET_HIGHSCORES } from "../constants/actions";

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

//creation of clearall usage
export const clearall = () => {
    return {
        type : CLEAR_ALL,
    }
};

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

export const BestHightScoreAsync = () =>{

    const highscores = [
        {name: "Jean-Louis", highScore: 10},
        {name: "Jean-Luc", highScore: 8},
        {name: "Jean-Charles", highScore: 8},
        {name: "Jean-Claude", highScore: 7},
        {name: "Jean-Michel", highScore: 5}
    ];

    return dispatch => {

        setTimeout(()=>{
            console.log('entrée dans le dispatch');
            dispatch(getHighScores(highscores))
        },2000);
    }
};





