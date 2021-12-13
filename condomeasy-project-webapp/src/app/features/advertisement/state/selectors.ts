import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state.model';
import { AdvertisementState } from './advertisement.state.model';

export const selectFeature =
  createFeatureSelector<AdvertisementState>('advertisements');

export const selectAdvertisements = createSelector(
  selectFeature,
  (state: AdvertisementState) => state.advertisements
);
