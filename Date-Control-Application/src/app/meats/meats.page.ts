import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MeatsService } from '../shared/Meats/meats.service';
import { Meats } from '../shared/Meats/Meats';

@Component({
  selector: 'app-meats',
  templateUrl: './meats.page.html',
  styleUrls: ['./meats.page.scss'],
})
export class MeatsPage implements OnInit {

  meForm: FormGroup;
  Listings = [];

  constructor(
    private meService: MeatsService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.meForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchMe();
    let productInfo = this.meService.getMeDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Meats);
      })
    })
  }

  formSubmit(){
    if (!this.meForm.valid) {
      return false;
    } else {
      this.meService.enterMeDetails(this.meForm.value).then(res => {
        console.log(res)
        this.meForm.reset();
        this.router.navigate(['/meats']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchMe() {
    this.meService.getMeDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteMeProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.meService.deleteMeProduct(id)
    }
  }

}
