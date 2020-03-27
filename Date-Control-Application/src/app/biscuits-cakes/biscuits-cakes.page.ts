import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { BiscuitsCakesService } from './../shared/biscuits-cakes.service';

@Component({
  selector: 'app-biscuits-cakes',
  templateUrl: './biscuits-cakes.page.html',
  styleUrls: ['./biscuits-cakes.page.scss'],
})
export class BiscuitsCakesPage implements OnInit {
  bcForm: FormGroup;

  constructor(
    private bcService: BiscuitsCakesService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bcForm = this.fb.group({
      brand: [''],
      description: [''],
      barcode: [''],
      quantity: [''],
      bbdate: ['']
    })
  }

  formsSubmit(){
    if (!this.bcForm.valid) {
      return false;
    } else {
      this.bcService.enterBcDetails(this.bcForm.value).then(res => {
        console.log(res)
        this.bcForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
