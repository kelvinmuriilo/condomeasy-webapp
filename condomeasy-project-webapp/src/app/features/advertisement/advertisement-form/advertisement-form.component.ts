import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from 'src/app/core/user/user.model';
import { Option } from 'src/app/shared/components/dumbs/inputs/input-select/option.model';
import { LOCALSTORAGE } from 'src/app/shared/constants';
import { AppState } from 'src/app/state/app.state.model';
import {
  Advertisement,
  CreateAdvertisement,
} from '../model/advertisement-model';
import { Category } from '../model/category-model';
import { AdvertisementService } from '../service/advertisement.service';
import { AdvertisementActions } from '../state/actions';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css'],
})
export class AdvertisementFormComponent implements OnInit, OnDestroy {
  loadAdvertisements: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isACombinar: boolean = false;

  subs: Array<Subscription> = [];
  advertisement: Advertisement;
  advertisementForm: FormGroup;
  categories: Array<Option> = [];
  selectedCategory: Category;
  images: Array<File>;
  urlSentImage: string;
  user: User;

  constructor(
    private advertisementService: AdvertisementService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private matDialogRef: MatDialogRef<AdvertisementFormComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.startAdvertisementForm();
    this.loadCategories();
    this.initViewUpdate();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  isUpdate(): boolean {
    return false;
  }

  inputImageOnChange(images: File[]): void {
    this.images = images;
    if (this.images) {
      this.sendImages();
    }
  }

  returnIsACombinar(value) {
    this.isACombinar = value;

    this.advertisementForm = this.formBuilder.group({
      name: this.advertisementForm.value.name,
      description: this.advertisementForm.value.description,
      value: '',
      image: this.urlSentImage
    });
    //document.getElementById('advertisement-price-input-text')[0].readOnly = true;
    //document.getElementById('advertisement-price-input-text')[0].setAttribute('readonly', this.isACombinar);
    return this.isACombinar;
  }

  sendAdvertisement(): void {
    const createAdvertisement: CreateAdvertisement = {
      name: this.advertisementForm.value.name,
      category: this.selectedCategory,
      description: this.advertisementForm.value.description,
      value: parseFloat(this.advertisementForm.value.value),
      imageUrl: this.urlSentImage,
      user: { id: parseInt(window.localStorage.getItem(LOCALSTORAGE.USER_ID)) },
    };

    this.store.dispatch(
      AdvertisementActions.createAdvertisement({
        createAdvertisement,
        successFunction: () => {
          this.toastrService.success('Anúncio cadastrado com sucesso!');
          this.matDialogRef.close();
        },
        errorFunction: () => {
          this.toastrService.error('Ocorreu um erro ao cadastrar o anúncio.');
        },
      })
    );
  }

  sendImages(): void {
    this.advertisementService
      .uploadImages(this.images[0])
      .subscribe((imagePath) => {
        this.urlSentImage = imagePath;
      });
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  private initViewUpdate(): void {
    if (this.isUpdate()) {
      let id: 1;
      this.loadAdvertisement(id);
    }
  }

  private loadAdvertisement(id: number): void {
    const sub = this.advertisementService
      .getAdvertisementById(id)
      .subscribe((ads) => (this.advertisement = ads.data));
    this.subs.push(sub);
  }

  private loadCategories(): void {
    const sub = this.advertisementService
      .getCategories()
      .subscribe((categories) => {
        categories.data.forEach((categ) => {
          let option: Option = {
            id: categ.id,
            name: categ.name,
          };
          this.categories.push(option);
          this.categories = this.categories.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        });
      });
    this.subs.push(sub);
  }

  private startAdvertisementForm(): void {
    this.advertisementForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('', [Validators.required]),
      value: this.formBuilder.control('', []),
      image: this.formBuilder.control('', [Validators.required]),
    });
  }
}
