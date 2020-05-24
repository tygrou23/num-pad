//import dependancies
import { ADD_NUMBER, VERIF, PREMIERE_QUESTION, CLEAR_ONE, CLEAR_ALL,  USER_SCORE, GET_BESTHIGHSCORES } from "../constants/actions";

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

//creation of the userscore
export const userscore = (payload)=>{
    return {
        type : USER_SCORE, payload
    }
};

//creation of getting the best highscores
export const getthebesthighscores = (payload)=>{
    return {
        type : GET_BESTHIGHSCORES, payload
    }
};

//creation of sending the tab of best highscore un async creation
export const BestHightScoreAsync = () =>{
    const highscores = [
        {name: "Alain Terrieur", highScore: 10},
        {name: "Alex Terrieur", highScore: 9},
        {name: "Serra Jean", highScore: 8},
        {name: "Julien", highScore: 5},
        {name: "Patrick", highScore: 3}
    ];
    //return the discpatch of this tab
    return dispatch => {
        setTimeout(()=>{
            console.log('START THE DISPATCH ACTION');
            //disptach the (getthebesthighscores(with the highscores tab inside))
            dispatch(getthebesthighscores(highscores))
        },3000);
    }
};





