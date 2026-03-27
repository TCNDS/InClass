import { createReducer, on} from "@ngrx/store";
import { increment } from "./action";
import { initialState} from "./state";

export const countReducer = createReducer(
    initialState, 
    on(increment, (state) => ({
        ...state,
        count: state.count + 1
    }))
)