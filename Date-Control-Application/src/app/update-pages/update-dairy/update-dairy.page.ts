import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DairyService } from '../../shared/Dairy/dairy.service';


@Component({
  selector: 'app-update-dairy',
  templateUrl: './update-dairy.page.html',
  styleUrls: ['./update-dairy.page.scss'],
})
export class UpdateDairyPage implements OnInit {

  updateDpForm: FormGroup;
  id: any;

  constructor(
    private dpService: DairyService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dpService.getDpDetails(this.id).valueChanges().subscribe(res => {
      this.updateDpForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateDpForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateDpForm.value)
  }

  updateForm() {
    this.dpService.updateDpDetails(this.id, this.updateDpForm.value)
      .then(() => {
        this.router.navigate(['/dairy']);
      })
      .catch(error => console.log(error));
  }

}
