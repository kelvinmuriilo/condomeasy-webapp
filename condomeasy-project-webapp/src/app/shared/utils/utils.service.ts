import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  matchArrayValues(array: Array<any>, arrayCheck: Array<any>): boolean {
    return array.every((element) => {});
  }
}
