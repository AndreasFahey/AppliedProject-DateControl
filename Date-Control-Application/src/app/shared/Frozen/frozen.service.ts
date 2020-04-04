import { Injectable } from '@angular/core';
import { Frozen } from './Frozen';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FrozenService {
fzListRef: AngularFireList<any>;
fzRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Details
  enterFzDetails(fz: Frozen) {
    return this.fzListRef.push({
      brand: fz.brand,
      description: fz.description,
      barcode: fz.barcode,
      quantity: fz.quantity,
      bbdate: fz.bbdate
    })
  }

  // Get Single Details
  getFzDetails(id: string){
    this.fzRef = this.db.object('/frozen/' + id);
    return this.fzRef;
  }

  // Get Listed Details
  getFzDetailsList(){
    this.fzListRef = this.db.list('/frozen');
    return this.fzListRef;
  }

  // Update Details - If you delete some etc
  updateFzDetails(id, fz:Frozen){
    return this.fzRef.update({
      brand: fz.brand,
      description: fz.description,
      barcode: fz.barcode,
      quantity: fz.quantity,
      bbdate: fz.bbdate
    })
  }

  // Delete Out of Date Products
  deleteFzProduct(id: string){
    this.fzRef = this.db.object('/frozen/' + id);
    this.fzRef.remove();
  }
}
