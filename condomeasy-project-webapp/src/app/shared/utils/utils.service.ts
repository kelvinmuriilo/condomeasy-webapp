import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  matchArrayValues(array: Array<any>, arrayCheck: Array<any>): boolean {
    console.log('array: ', array);
    console.log('array values: ', arrayCheck);
    return array.every((element) => {});
  }
}
