import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MeatsService } from '../../shared/Meats/meats.service';

@Component({
  selector: 'app-update-meats',
  templateUrl: './update-meats.page.html',
  styleUrls: ['./update-meats.page.scss'],
})
export class UpdateMeatsPage implements OnInit {

  updateMeForm: FormGroup;
  id: any;

  constructor(
    private meService: MeatsService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.meService.getMeDetails(this.id).valueChanges().subscribe(res => {
      this.updateMeForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateMeForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateMeForm.value)
  }

  updateForm() {
    this.meService.updateMeDetails(this.id, this.updateMeForm.value)
      .then(() => {
        this.router.navigate(['/meats']);
      })
      .catch(error => console.log(error));
  }

}
