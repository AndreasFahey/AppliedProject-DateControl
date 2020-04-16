import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CerealMuesliService } from '../shared/Cereal-Muesli/cereal-muesli.service';
import { CerealMuesli } from '../shared/Cereal-Muesli/CerealMuesli';

@Component({
  selector: 'app-cereal-muesli',
  templateUrl: './cereal-muesli.page.html',
  styleUrls: ['./cereal-muesli.page.scss'],
})
export class CerealMuesliPage implements OnInit {

  cmForm: FormGroup;
  Listings = [];

  constructor(
    private cmService: CerealMuesliService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.cmForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchCm();
    let productInfo = this.cmService.getCmDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as CerealMuesli);
      })
    })
  }

  formSubmit(){
    if (!this.cmForm.valid) {
      return false;
    } else {
      this.cmService.enterCmDetails(this.cmForm.value).then(res => {
        console.log(res)
        this.cmForm.reset();
        this.router.navigate(['/cereal-muesli']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchCm() {
    this.cmService.getCmDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteCmProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.cmService.deleteCmProduct(id)
    }
  }

}
