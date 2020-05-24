//import the constants
import {USER_SCORE, GET_BESTHIGHSCORES} from '../constants/actions';

//defin the state init
const stateinit = {
    player: {
        name: '',
        highScore: null
    },
    highScores:[]
};

//export the state
export default (state = stateinit, action = {}) => {

    //switch between action -> user_score and besthishcore
    switch ( action.type) {

        //send the user score
        case USER_SCORE:
            console.log('SEND USER SCORE');
            return {state};

        //get the best highscore listing
        case GET_BESTHIGHSCORES:
            console.log('GET THE BEST HIGHSCORE LISTING FROM PLAYERS', action.payload);
            return {...state, highScores: action.payload};

        //other case
        default:
            return state;
    }
}
