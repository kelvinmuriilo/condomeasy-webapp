import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category-model';
import { AdvertisementService } from '../service/advertisement.service';

@Component({
  selector: 'app-advertisement-filter',
  templateUrl: './advertisement-filter.component.html',
  styleUrls: ['./advertisement-filter.component.css'],
})
export class AdvertisementFilterComponent implements OnInit {
  categories: Array<Category>;

  constructor(
    private advertisementService: AdvertisementService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this,
      this.advertisementService.getCategories().subscribe(
        (categoryList) => {
          this.categories = categoryList.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        },
        (err) => {
          this.toastrService.error(err.message);
        }
      );
  }
}
