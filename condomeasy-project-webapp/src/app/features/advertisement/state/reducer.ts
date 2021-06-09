import { Action, createReducer, on, State } from '@ngrx/store';
import { AdvertisementActions } from './actions';
import { AdvertisementState } from './advertisement.state.model';

const initialState: AdvertisementState = {
  advertisements: [],
};

const advertisementReducer = createReducer(
  initialState,
  on(AdvertisementActions.loadAllAdvertisementsSuccess, (state, action) => ({
    ...state,
    state: action.advertisements,
  })),
  on(AdvertisementActions.createAdvertisementSuccess, (state, action) => ({
    ...state,
    state: [...state.advertisements, action.advertisement],
  }))
);

export function reducer(state, action) {
  return advertisementReducer(state, action);
}