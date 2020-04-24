import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DeliService } from '../../shared/Deli-Stock/deli.service';

@Component({
  selector: 'app-update-ds',
  templateUrl: './update-ds.page.html',
  styleUrls: ['./update-ds.page.scss'],
})
export class UpdateDsPage implements OnInit {

  updateDsForm: FormGroup;
  id: any;

  constructor(
    private dsService: DeliService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dsService.getDsDetails(this.id).valueChanges().subscribe(res => {
      this.updateDsForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateDsForm = this.fb.group({
      brand: [''],
      description: [''],
      batchcode:[''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateDsForm.value)
  }

  updateForm() {
    this.dsService.updateDsDetails(this.id, this.updateDsForm.value)
      .then(() => {
        this.router.navigate(['/deli-stock']);
      })
      .catch(error => console.log(error));
  }

}
