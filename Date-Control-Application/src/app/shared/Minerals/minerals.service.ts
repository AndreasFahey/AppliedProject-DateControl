import { Injectable } from '@angular/core';
import { Minerals } from './Minerals';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MineralsService {
  minListRef: AngularFireList<any>;
  minRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Details
  enterMinDetails(min: Minerals) {
    return this.minListRef.push({
      brand: min.brand,
      description: min.description,
      barcode: min.barcode,
      quantity: min.quantity,
      bbdate: min.bbdate
    })
  }

  // Get Single Details
  getMinDetails(id: string){
    this.minRef = this.db.object('/minerals/' + id);
    return this.minRef;
  }

  // Get Listed Details
  getMinDetailsList(){
    this.minListRef = this.db.list('/minerals');
    return this.minListRef;
  }

  // Update Details - If you delete some etc
  updateMinDetails(id, min:Minerals){
    return this.minRef.update({
      brand: min.brand,
      description: min.description,
      barcode: min.barcode,
      quantity: min.quantity,
      bbdate: min.bbdate
    })
  }

  // Delete Out of Date Products
  deleteMinProduct(id: string){
    this.minRef = this.db.object('/minerals/' + id);
    this.minRef.remove();
  }

}
