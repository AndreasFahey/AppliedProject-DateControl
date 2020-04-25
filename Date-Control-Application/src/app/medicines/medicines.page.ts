import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MedicinesService } from '../shared/Medicines/medicines.service';
import { Medicines } from '../shared/Medicines/Medicines';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
})
export class MedicinesPage implements OnInit {

  medsForm: FormGroup;
  Listings = [];

  constructor(
    private medsService: MedicinesService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.medsForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchMeds();
    let productInfo = this.medsService.getMedsDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Medicines);
      })
    })
  }

  formSubmit(){
    if (!this.medsForm.valid) {
      return false;
    } else {
      this.medsService.enterMedsDetails(this.medsForm.value).then(res => {
        console.log(res)
        this.medsForm.reset();
        this.router.navigate(['/medicines']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchMeds() {
    this.medsService.getMedsDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteMedsProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.medsService.deleteMedsProduct(id)
    }
  }

}
