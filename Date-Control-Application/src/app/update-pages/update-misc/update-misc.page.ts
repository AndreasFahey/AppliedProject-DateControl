import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MiscService } from '../../shared/Misc-Other/misc.service';

@Component({
  selector: 'app-update-misc',
  templateUrl: './update-misc.page.html',
  styleUrls: ['./update-misc.page.scss'],
})
export class UpdateMiscPage implements OnInit {

  updateMiscForm: FormGroup;
  id: any;

  constructor(
    private miscService: MiscService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.miscService.getMiscDetails(this.id).valueChanges().subscribe(res => {
      this.updateMiscForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateMiscForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateMiscForm.value)
  }

  updateForm() {
    this.miscService.updateMiscDetails(this.id, this.updateMiscForm.value)
      .then(() => {
        this.router.navigate(['/misc-other']);
      })
      .catch(error => console.log(error));
  }

}
