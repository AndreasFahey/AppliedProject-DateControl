import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DeliService } from '../shared/Deli-Stock/deli.service';
import { Deli } from '../shared/Deli-Stock/Deli';

@Component({
  selector: 'app-deli-stock',
  templateUrl: './deli-stock.page.html',
  styleUrls: ['./deli-stock.page.scss'],
})
export class DeliStockPage implements OnInit {

  dsForm: FormGroup;
  Listings = [];

  constructor(
    private dsService: DeliService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dsForm = this.fb.group({
      brand: [''],
      description: [''],
      batchcode: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchDs();
    let productInfo = this.dsService.getDsDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Deli);
      })
    })
  }

  formSubmit(){
    if (!this.dsForm.valid) {
      return false;
    } else {
      this.dsService.enterDsDetails(this.dsForm.value).then(res => {
        console.log(res)
        this.dsForm.reset();
        this.router.navigate(['/deli-stock']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchDs() {
    this.dsService.getDsDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteDsProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.dsService.deleteDsProduct(id)
    }
  }

}
