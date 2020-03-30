import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BiscuitsCakesService } from '../shared/Biscuits-Cakes/biscuits-cakes.service';
import { BiscuitsCakes } from '../shared/Biscuits-Cakes/BiscuitsCakes';

@Component({
  selector: 'app-biscuits-cakes',
  templateUrl: './biscuits-cakes.page.html',
  styleUrls: ['./biscuits-cakes.page.scss'],
})
export class BiscuitsCakesPage implements OnInit {
  bcForm: FormGroup;
  Listings = [];

  constructor(
    private bcService: BiscuitsCakesService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bcForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchBc();
    let productInfo = this.bcService.getBcDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as BiscuitsCakes);
      })
    })
  }

  formSubmit(){
    if (!this.bcForm.valid) {
      return false;
    } else {
      this.bcService.enterBcDetails(this.bcForm.value).then(res => {
        console.log(res)
        this.bcForm.reset();
        this.router.navigate(['/biscuits-cakes']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchBc() {
    this.bcService.getBcDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBcProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.bcService.deleteBcProduct(id)
    }
  }
}
