//import what we need to combine the reducers
import { combineReducers} from "redux";
import calcul from "./calcul";
import score from "./score";

//export combinereducers with (calcul , score)
export default combineReducers({calcul, score });
