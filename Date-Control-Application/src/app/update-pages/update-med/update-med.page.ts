import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MedicinesService } from '../../shared/Medicines/medicines.service';

@Component({
  selector: 'app-update-med',
  templateUrl: './update-med.page.html',
  styleUrls: ['./update-med.page.scss'],
})
export class UpdateMedPage implements OnInit {

  updateMedsForm: FormGroup;
  id: any;

  constructor(
    private medsService: MedicinesService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.medsService.getMedsDetails(this.id).valueChanges().subscribe(res => {
      this.updateMedsForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateMedsForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateMedsForm.value)
  }

  updateForm() {
    this.medsService.updateMedsDetails(this.id, this.updateMedsForm.value)
      .then(() => {
        this.router.navigate(['/medicines']);
      })
      .catch(error => console.log(error));
  }

}
