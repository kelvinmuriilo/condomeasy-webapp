import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category-model';
import { AdvertisementService } from '../service/advertisement.service';
import { AdvertisementActions } from '../state/actions';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-advertisement-filter',
  templateUrl: './advertisement-filter.component.html',
  styleUrls: ['./advertisement-filter.component.css'],
})
export class AdvertisementFilterComponent implements OnInit {
  categories: Array<Category>;

  constructor(
    private advertisementService: AdvertisementService,
    private toastrService: ToastrService,
    private router: Router,
    private matDialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  redirectToAdvetisementByCategoryFilter(id) {
    this.router.navigate(['advertisements/category', id]);
  }

  filter(id) {
    this.store.dispatch(
      AdvertisementActions.loadAllAdvertisementsByCategoryId({id})
    );
    this.matDialog.closeAll();
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
