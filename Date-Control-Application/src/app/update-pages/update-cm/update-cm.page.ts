import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CerealMuesliService } from '../../shared/Cereal-Muesli/cereal-muesli.service';

@Component({
  selector: 'app-update-cm',
  templateUrl: './update-cm.page.html',
  styleUrls: ['./update-cm.page.scss'],
})
export class UpdateCmPage implements OnInit {

  updateCmForm: FormGroup;
  id: any;

  constructor(
    private cmService: CerealMuesliService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.cmService.getCmDetails(this.id).valueChanges().subscribe(res => {
      this.updateCmForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateCmForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateCmForm.value)
  }

  updateForm() {
    this.cmService.updateCmDetails(this.id, this.updateCmForm.value)
      .then(() => {
        this.router.navigate(['/cereal-muesli']);
      })
      .catch(error => console.log(error));
  }

}
