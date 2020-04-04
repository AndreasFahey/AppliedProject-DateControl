import { Injectable } from '@angular/core';
import { CerealMuesli } from './CerealMuesli';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CerealMuesliService {
cmListRef: AngularFireList<any>;
cmRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Deatils
  enterCmDetails(cm: CerealMuesli) {
    return this.cmListRef.push({
      brand: cm.brand,
      description: cm.description,
      barcode: cm.barcode,
      quantity: cm.quantity,
      bbdate: cm.bbdate
    })
  }

  // Get Single Details
  getCmDetails(id: string){
    this.cmRef = this.db.object('/cereal-muesli/' + id);
    return this.cmRef;
  }

  // Get Listed Details
  getCmDetailsList(){
    this.cmListRef = this.db.list('/cereal-muesli');
    return this.cmListRef;
  }

  // Update Deatils - If you delete some etc
  updateCmDetails(id, cm:CerealMuesli){
    return this.cmRef.update({
      brand: cm.brand,
      description: cm.description,
      barcode: cm.barcode,
      quantity: cm.quantity,
      bbdate: cm.bbdate
    })
  }

  // Delete Out of Date Products
  deleteCmProduct(id: string){
    this.cmRef = this.db.object('/cereal-muesli/' + id);
    this.cmRef.remove();
  }

}
