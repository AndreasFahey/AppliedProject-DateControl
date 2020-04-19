import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ConfectioneryCrispsService } from '../../shared/Confectionery-Crisps/confectionery-crisps.service';

@Component({
  selector: 'app-update-cc',
  templateUrl: './update-cc.page.html',
  styleUrls: ['./update-cc.page.scss'],
})
export class UpdateCcPage implements OnInit {

  updateCcForm: FormGroup;
  id: any;

  constructor(
    private ccService: ConfectioneryCrispsService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.ccService.getCcDetails(this.id).valueChanges().subscribe(res => {
      this.updateCcForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateCcForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateCcForm.value)
  }

  updateForm() {
    this.ccService.updateCcDetails(this.id, this.updateCcForm.value)
      .then(() => {
        this.router.navigate(['/confectionery-crisps']);
      })
      .catch(error => console.log(error));
  }

}
