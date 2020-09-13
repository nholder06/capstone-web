import { combineReducers } from "redux";
import { user} from "../reducers/user";
import { pets } from "../reducers/pets";

export const reducers = combineReducers({
    user,
    pets
})