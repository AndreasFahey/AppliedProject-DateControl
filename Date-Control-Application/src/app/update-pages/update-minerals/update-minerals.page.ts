import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MineralsService } from '../../shared/Minerals/minerals.service';

@Component({
  selector: 'app-update-minerals',
  templateUrl: './update-minerals.page.html',
  styleUrls: ['./update-minerals.page.scss'],
})
export class UpdateMineralsPage implements OnInit {

  updateMinForm: FormGroup;
  id: any;

  constructor(
    private minService: MineralsService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.minService.getMinDetails(this.id).valueChanges().subscribe(res => {
      this.updateMinForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateMinForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateMinForm.value)
  }

  updateForm() {
    this.minService.updateMinDetails(this.id, this.updateMinForm.value)
      .then(() => {
        this.router.navigate(['/minerals']);
      })
      .catch(error => console.log(error));
  }

}
