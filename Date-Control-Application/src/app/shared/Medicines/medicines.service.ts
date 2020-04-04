import { Injectable } from '@angular/core';
import { Medicines } from './Medicines';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  medsListRef: AngularFireList<any>;
  medsRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Details
  enterMedsDetails(meds: Medicines) {
    return this.medsListRef.push({
      brand: meds.brand,
      description: meds.description,
      barcode: meds.barcode,
      quantity: meds.quantity,
      bbdate: meds.bbdate
    })
  }

  // Get Single Details
  getMedsDetails(id: string){
    this.medsRef = this.db.object('/medicines/' + id);
    return this.medsRef;
  }

  // Get Listed Details
  getMedsDetailsList(){
    this.medsListRef = this.db.list('/medicines');
    return this.medsListRef;
  }

  // Update Details - If you delete some etc
  updateMedsDetails(id, meds:Medicines){
    return this.medsRef.update({
      brand: meds.brand,
      description: meds.description,
      barcode: meds.barcode,
      quantity: meds.quantity,
      bbdate: meds.bbdate
    })
  }

  // Delete Out of Date Products
  deleteMedsProduct(id: string){
    this.medsRef = this.db.object('/medicines/' + id);
    this.medsRef.remove();
  }
}
