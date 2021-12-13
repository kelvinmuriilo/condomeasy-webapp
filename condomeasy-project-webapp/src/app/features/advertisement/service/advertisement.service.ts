import { HttpClient, HttpHeaders } from '@angular/common/http';
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
const uploadImagesUrl = environment.uploadImagesUrl;
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

  getAdvertisementByCategoryId(id: number): Observable<AdvertisementListResponseModel> {
    return this.httpClient.get<AdvertisementListResponseModel>(
      `${baseUrl}/advertisement/byCategoria/${id}`
    );
  }

  createAdvertisement(
    createAdvertisement: CreateAdvertisement
  ): Observable<AdvertisementResponseModel> {
    return this.httpClient.post<AdvertisementResponseModel>(
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

  uploadImages(images: File): Observable<string> {
    let formData: FormData = new FormData();
    formData.append('image', images);
    return this.httpClient.post(`${uploadImagesUrl}`, formData, {
      responseType: 'text',
    });
  }
}
