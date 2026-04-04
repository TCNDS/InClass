import { createReducer, on } from '@ngrx/store';
import { increment } from './action';
import { CounterState, initialState } from './state';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterState) => ({
    ...state,
    count: state.count + 1,
  })),
);
