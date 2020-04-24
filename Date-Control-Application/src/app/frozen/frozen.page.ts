import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FrozenService } from '../shared/Frozen/frozen.service';
import { Frozen } from '../shared/Frozen/Frozen';

@Component({
  selector: 'app-frozen',
  templateUrl: './frozen.page.html',
  styleUrls: ['./frozen.page.scss'],
})
export class FrozenPage implements OnInit {

  fzForm: FormGroup;
  Listings = [];

  constructor(
    private fzService: FrozenService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fzForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchFz();
    let productInfo = this.fzService.getFzDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Frozen);
      })
    })
  }

  formSubmit(){
    if (!this.fzForm.valid) {
      return false;
    } else {
      this.fzService.enterFzDetails(this.fzForm.value).then(res => {
        console.log(res)
        this.fzForm.reset();
        this.router.navigate(['/frozen']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchFz() {
    this.fzService.getFzDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteFzProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.fzService.deleteFzProduct(id)
    }
  }

}
