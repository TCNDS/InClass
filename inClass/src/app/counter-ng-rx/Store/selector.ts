import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./state";

// create featrue selector first
export const selectFeature = createFeatureSelector
<CounterState>('counter');
// select specific properity from featrue selector
export const selectCount = createSelector(
    selectFeature,
    (state: CounterState) =>{return state.count}
)