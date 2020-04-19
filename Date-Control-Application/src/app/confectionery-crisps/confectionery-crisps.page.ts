import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ConfectioneryCrispsService } from '../shared/Confectionery-Crisps/confectionery-crisps.service';
import { ConfecCrisps } from '../shared/Confectionery-Crisps/ConfecCrisps';

@Component({
  selector: 'app-confectionery-crisps',
  templateUrl: './confectionery-crisps.page.html',
  styleUrls: ['./confectionery-crisps.page.scss'],
})
export class ConfectioneryCrispsPage implements OnInit {

  ccForm: FormGroup;
  Listings = [];

  constructor(
    private ccService: ConfectioneryCrispsService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.ccForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchCc();
    let productInfo = this.ccService.getCcDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as ConfecCrisps);
      })
    })
  }

  formSubmit(){
    if (!this.ccForm.valid) {
      return false;
    } else {
      this.ccService.enterCcDetails(this.ccForm.value).then(res => {
        console.log(res)
        this.ccForm.reset();
        this.router.navigate(['/confectionery-crisps']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchCc() {
    this.ccService.getCcDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteCcProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.ccService.deleteCcProduct(id)
    }
  }

}
