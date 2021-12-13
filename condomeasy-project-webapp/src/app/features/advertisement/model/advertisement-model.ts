import { ResponseModel } from 'src/app/core/model/response.model';
import { User } from 'src/app/core/user/user.model';
import { Category } from './category-model';

export interface Advertisement {
  id: number;
  name: string;
  description: string;
  value: number;
  category: Category;
  user: User;
  imageUrl: string;
}

export interface AdvertisementListResponseModel extends ResponseModel {
  data: Array<Advertisement>;
}

export interface AdvertisementResponseModel extends ResponseModel {
  data: Advertisement;
}

export interface CreateAdvertisement {
  name: string;
  description: string;
  value: number;
  category: Category;
  user: any;
  imageUrl: string;
}

export interface UpdateAdvertisement {
  name: string;
  description: string;
  value: number;
  category: Category;
  user: User;
  imageUrl: string;
}
