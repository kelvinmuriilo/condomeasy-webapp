import { createAction, props } from '@ngrx/store';
import { ACTION } from 'src/app/shared/constants';
import {
  Advertisement,
  CreateAdvertisement,
} from '../model/advertisement-model';

const loadAllAdvertisements = createAction(ACTION.LOAD_ALL_ADVERSTISEMENTS);
const loadAllAdvertisementsByCategoryId = createAction(
  ACTION.LOAD_ALL_ADVERSTISEMENTS_BY_CATEGORY,
  props<{
    id: number 
  }>()
  );

const loadAllAdvertisementsByCategoryIdSuccess = createAction(
  ACTION.LOAD_ALL_ADVERSTISEMENTS_BY_CATEGORY_SUCCESS,
  props<{ advertisements: Array<Advertisement> }>()
);

const loadAllAdvertisementsByCategoryIdError = createAction(
  ACTION.LOAD_ALL_ADVERSTISEMENTS_BY_CATEGORY_ERROR,
  props<{ errors: any }>()
);

const loadAllAdvertisementsSuccess = createAction(
  ACTION.LOAD_ALL_ADVERTISEMENTS_SUCCESS,
  props<{ advertisements: Array<Advertisement> }>()
);

const loadAllAdvertisementsError = createAction(
  ACTION.LOAD_ALL_ADVERTISEMENT_ERROR,
  props<{ errors: any }>()
);

const createAdvertisement = createAction(
  ACTION.CREATE_ADVERTISEMENT,
  props<{
    createAdvertisement: CreateAdvertisement;
    successFunction: any;
    errorFunction: any;
  }>()
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
  loadAllAdvertisementsByCategoryId,
  loadAllAdvertisementsByCategoryIdSuccess,
  loadAllAdvertisementsByCategoryIdError,
  loadAllAdvertisementsSuccess,
  loadAllAdvertisementsError,
  createAdvertisement,
  createAdvertisementSuccess,
  createAdvertisementError,
};
