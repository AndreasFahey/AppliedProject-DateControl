import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DairyService } from '../shared/Dairy/dairy.service';
import { Dairy } from '../shared/Dairy/Dairy';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.page.html',
  styleUrls: ['./dairy.page.scss'],
})
export class DairyPage implements OnInit {

  dpForm: FormGroup;
  Listings = [];

  constructor(
    private dpService: DairyService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dpForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchDp();
    let productInfo = this.dpService.getDpDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Dairy);
      })
    })
  }

  formSubmit(){
    if (!this.dpForm.valid) {
      return false;
    } else {
      this.dpService.enterDpDetails(this.dpForm.value).then(res => {
        console.log(res)
        this.dpForm.reset();
        this.router.navigate(['/dairy']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchDp() {
    this.dpService.getDpDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteDpProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.dpService.deleteDpProduct(id)
    }
  }

}
