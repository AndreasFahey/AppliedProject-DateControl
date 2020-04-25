import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MineralsService } from '../shared/Minerals/minerals.service';
import { Minerals } from '../shared/Minerals/Minerals';

@Component({
  selector: 'app-minerals',
  templateUrl: './minerals.page.html',
  styleUrls: ['./minerals.page.scss'],
})
export class MineralsPage implements OnInit {

  minForm: FormGroup;
  Listings = [];

  constructor(
    private minService: MineralsService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.minForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchMin();
    let productInfo = this.minService.getMinDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Minerals);
      })
    })
  }

  formSubmit(){
    if (!this.minForm.valid) {
      return false;
    } else {
      this.minService.enterMinDetails(this.minForm.value).then(res => {
        console.log(res)
        this.minForm.reset();
        this.router.navigate(['/minerals']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchMin() {
    this.minService.getMinDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteMinProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.minService.deleteMinProduct(id)
    }
  }

}
