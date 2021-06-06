import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AdvertisementListResponseModel,
  AdvertisementResponseModel,
  CreateAdvertisement,
  UpdateAdvertisement,
} from '../model/advertisement-model';
import { CategoryListResponseModel } from '../model/category-model';
import { environment } from './../../../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor(private httpClient: HttpClient) {}

  getAdvertisements(): Observable<AdvertisementListResponseModel> {
    return this.httpClient.get<AdvertisementListResponseModel>(
      `${baseUrl}/advertisement`
    );
  }

  getCategories(): Observable<CategoryListResponseModel> {
    return this.httpClient.get<CategoryListResponseModel>(
      `${baseUrl}/category`
    );
  }

  getAdvertisementById(id: number): Observable<AdvertisementResponseModel> {
    return this.httpClient.get<AdvertisementResponseModel>(
      `${baseUrl}/advertisement/${id}`
    );
  }

  createAdvertisement(
    createAdvertisement: CreateAdvertisement
  ): Observable<string> {
    return this.httpClient.post<string>(
      `${baseUrl}/advertisement`,
      createAdvertisement
    );
  }

  updateAdvertisement(
    id: number,
    updateAdvertisement: UpdateAdvertisement
  ): Observable<string> {
    return this.httpClient.post<string>(
      `${baseUrl}/advertisement/${id}`,
      updateAdvertisement
    );
  }
}
