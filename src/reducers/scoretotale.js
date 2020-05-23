//import score const from actions
import { USER_SCORE, GET_BESTHIGHTSCORE} from '../constants/actions';

//definis the stateinit
const stateinit = {
    player: {name: '', scoreTotal: null},
    scoreTotals:[]
};

export default (state = stateinit, action = {}) => {

    //switch betwin different case
    switch ( action.type) {
        //SEND THE USER SCORE
        case USER_SCORE:
            console.log('SEND USER SCORE');
            return {state};

        //GET THE BEST HIGHTSCORE FROM USERS
        case GET_BESTHIGHTSCORE:
            console.log('GEST THE BEST HIGHTSCORE LISTING : ', action.payload);
            return {...state, scoreTotals: action.payload};
            
        //OTHER
        default:
            return state;
    }

}
