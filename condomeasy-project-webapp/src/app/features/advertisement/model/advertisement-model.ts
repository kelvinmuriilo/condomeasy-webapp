import { ResponseModel } from 'src/app/core/model/response.model';
import { Category } from './category-model';

export interface Advertisement {
  id: number;
  name: string;
  description: string;
  value: number;
  category: Category;
  userId: number;
}

export interface AdvertisementListResponseModel extends ResponseModel {
  data: Array<Advertisement>;
}

export interface AdvertisementResponseModel extends ResponseModel {
  data: Advertisement;
}
