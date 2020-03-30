import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";


import { BiscuitsCakesService } from '../../shared/Biscuits-Cakes/biscuits-cakes.service';

@Component({
  selector: 'app-update-bc',
  templateUrl: './update-bc.page.html',
  styleUrls: ['./update-bc.page.scss'],
})
export class UpdateBcPage implements OnInit {
  updateBcForm: FormGroup;
  id: any;

  constructor(
    private bcService: BiscuitsCakesService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.updateBcForm = this.fb.group({
      brand: [''],
      description: [''],
      quantity: ['']
    })
    console.log(this.updateBcForm.value)
  }

  updateForm() {
    this.bcService.updateBcDetails(this.id, this.updateBcForm.value)
      .then(() => {
        this.router.navigate(['/biscuits-cakes']);
      })
      .catch(error => console.log(error));
  }

}
