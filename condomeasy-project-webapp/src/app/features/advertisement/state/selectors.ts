import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state.model';
import { AdvertisementState } from './advertisement.state.model';

export const selectFeature = (state: AppState) => state.advertisements;

export const selectAdvertisements = createSelector(
  selectFeature,
  (state: AdvertisementState) => state.advertisements
);
