import { createAction, props } from '@ngrx/store';
import { ACTION } from 'src/app/shared/constants';
import {
  Advertisement,
  CreateAdvertisement,
} from '../model/advertisement-model';

const loadAllAdvertisements = createAction(ACTION.LOAD_ALL_ADVERSTISEMENTS);

const loadAllAdvertisementsSuccess = createAction(
  ACTION.LOAD_ALL_ADVERTISEMENTS_SUCCESS,
  props<{ advertisements: Array<Advertisement> }>()
);

const loadAllAdvertisementsError = createAction(
  ACTION.LOAD_ALL_ADVERTISEMENT_ERROR,
  props<{ errors: Array<any> }>()
);

const createAdvertisement = createAction(
  ACTION.CREATE_ADVERTISEMENT,
  props<{ createAdvertisement: CreateAdvertisement }>()
);

const createAdvertisementSuccess = createAction(
  ACTION.CREATE_ADVERTISEMENT_SUCCESS,
  props<{ advertisement: Advertisement }>()
);

const createAdvertisementError = createAction(
  ACTION.CREATE_ADVERTISEMENT_ERROR
);

export const AdvertisementActions = {
  loadAllAdvertisements,
  loadAllAdvertisementsSuccess,
  loadAllAdvertisementsError,
  createAdvertisement,
  createAdvertisementSuccess,
  createAdvertisementError,
};
