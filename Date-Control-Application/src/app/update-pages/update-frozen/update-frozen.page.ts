import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FrozenService } from '../../shared/Frozen/frozen.service';

@Component({
  selector: 'app-update-frozen',
  templateUrl: './update-frozen.page.html',
  styleUrls: ['./update-frozen.page.scss'],
})
export class UpdateFrozenPage implements OnInit {

  updateFzForm: FormGroup;
  id: any;

  constructor(
    private fzService: FrozenService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.fzService.getFzDetails(this.id).valueChanges().subscribe(res => {
      this.updateFzForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateFzForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode:[''],
      quantity: [''],
      bbdate: ['']
    })
    console.log(this.updateFzForm.value)
  }

  updateForm() {
    this.fzService.updateFzDetails(this.id, this.updateFzForm.value)
      .then(() => {
        this.router.navigate(['/frozen']);
      })
      .catch(error => console.log(error));
  }

}
