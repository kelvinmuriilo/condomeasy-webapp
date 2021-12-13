import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';
import { ACTION } from 'src/app/shared/constants';
import { AppState } from 'src/app/state/app.state.model';

import { AdvertisementService } from './../service/advertisement.service';
import { AdvertisementActions } from './actions';

@Injectable()
export class AdvertisementEffects {
  loadAdvertisements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ACTION.LOAD_ALL_ADVERSTISEMENTS),
      switchMap(() =>
        this.advertisementService.getAdvertisements().pipe(
          map((ads) =>
            AdvertisementActions.loadAllAdvertisementsSuccess({
              advertisements: ads.data,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  createAdivertisement$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementActions.createAdvertisement),
      switchMap((action) =>
        this.advertisementService
          .createAdvertisement(action.createAdvertisement)
          .pipe(
            map((ads) => {
              action.successFunction();
              return AdvertisementActions.createAdvertisementSuccess({
                advertisement: ads.data,
              });
            }),
            catchError(() => of(action.errorFunction()))
          )
      )
    );
  });

  loadAllAdvertisementsByCategoryId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdvertisementActions.loadAllAdvertisementsByCategoryId),
      switchMap((action) =>
        this.advertisementService
          .getAdvertisementByCategoryId(action.id)
          .pipe(
            map((ads) => {
              return AdvertisementActions.loadAllAdvertisementsByCategoryIdSuccess({
                advertisements: ads.data,
              });
            })
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private advertisementService: AdvertisementService
  ) {}
}
