import { ResponseModel } from 'src/app/core/model/response.model';

export interface Category {
  id: number;
  name: string;
}

export interface CategoryListResponseModel extends ResponseModel {
  data: Array<Category>;
}
