/* import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ACTION } from 'src/app/shared/constants';
import { AppState } from 'src/app/state/app.state.model';

import { AdvertisementService } from './../service/advertisement.service';
import { AdvertisementActions } from './actions';

@Injectable()
export class AdvertisementEffects {
  loadAdvertisements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTION.LOAD_ALL_ADVERSTISEMENTS),
      exhaustMap((action) =>
        this.advertisementService.getAdvertisements().pipe(
          map((ads) => this.store.dispatch(AdvertisementActions.loadAllAdvertisementsSuccess({advertisements: ads.data})))
          ),
          catchError(error => of(AuthApiActions.loginFailure({ error })))
        )
      )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private advertisementService: AdvertisementService
  ) {}
}
 */
