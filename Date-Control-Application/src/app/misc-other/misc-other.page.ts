import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MiscService } from '../shared/Misc-Other/misc.service';
import { Misc } from '../shared/Misc-Other/Misc';

@Component({
  selector: 'app-misc-other',
  templateUrl: './misc-other.page.html',
  styleUrls: ['./misc-other.page.scss'],
})
export class MiscOtherPage implements OnInit {

  miscForm: FormGroup;
  Listings = [];

  constructor(
    private miscService: MiscService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.miscForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
    this.fetchMisc();
    let productInfo = this.miscService.getMiscDetailsList();
    productInfo.snapshotChanges().subscribe(res => {
      this.Listings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Listings.push(a as Misc);
      })
    })
  }

  formSubmit(){
    if (!this.miscForm.valid) {
      return false;
    } else {
      this.miscService.enterMiscDetails(this.miscForm.value).then(res => {
        console.log(res)
        this.miscForm.reset();
        this.router.navigate(['/misc-other']);
      })
        .catch(error => console.log(error));
    }
  }

  fetchMisc() {
    this.miscService.getMiscDetailsList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteMiscProduct(id) {
    console.log(id)
    if (window.confirm('Confirm Product Removal from Store Inventory?')) {
      this.miscService.deleteMiscProduct(id)
    }
  }

}
