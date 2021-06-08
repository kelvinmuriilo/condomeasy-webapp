import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Option } from 'src/app/shared/components/dumbs/inputs/input-select/option.model';
import { Advertisement } from '../model/advertisement-model';
import { AdvertisementService } from '../service/advertisement.service';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css'],
})
export class AdvertisementFormComponent implements OnInit, OnDestroy {
  subs: Array<Subscription> = [];
  advertisement: Advertisement;
  advertisementForm: FormGroup;
  categories: Array<Option> = [];
  selectedCategory: number;
  images: Array<File>;
  urlSentImage: string;

  constructor(
    private advertisementService: AdvertisementService,
    private formBuilder: FormBuilder
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
    console.log(images);
    if (this.images) {
      this.sendImages();
    }
  }

  sendAvertisement(): void {}

  sendImages(): void {
    this.advertisementService
      .uploadImages(this.images[0])
      .subscribe((imagePath) => {
        this.urlSentImage = imagePath;
        console.log(this.urlSentImage);
      });
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
      value: this.formBuilder.control('', [Validators.required]),
      image: this.formBuilder.control('', [Validators.required]),
    });
  }
}
