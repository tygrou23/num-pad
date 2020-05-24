//import dependancies
import { ADD_NUMBER, VERIF, PREMIERE_QUESTION, CLEAR_ONE, CLEAR_ALL, USER_SCORE, GET_BESTHIGHTSCORE } from "../constants/actions";

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

export const sendscore = (payload)=>{
    return {
        type : USER_SCORE, payload
    }
};

export const getbesthightscore = (payload)=>{
    return {
        type : GET_BESTHIGHTSCORE, payload
    }
};





