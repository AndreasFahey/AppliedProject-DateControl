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
    bcService: BiscuitsCakesService,
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

}
