import { combineReducers } from "redux";
import { user} from "../reducers/user";
import { pet } from "../reducers/pet";

export const reducers = combineReducers({
    user,
    pet
})