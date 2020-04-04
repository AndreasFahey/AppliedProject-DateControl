import { Injectable } from '@angular/core';
import { Misc } from './Misc';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MiscService {
  miscListRef: AngularFireList<any>;
  miscRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Details
  enterMiscDetails(misc: Misc) {
    return this.miscListRef.push({
      brand: misc.brand,
      description: misc.description,
      barcode: misc.barcode,
      quantity: misc.quantity,
      bbdate: misc.bbdate
    })
  }

  // Get Single Details
  getMiscDetails(id: string){
    this.miscRef = this.db.object('/misc-other/' + id);
    return this.miscRef;
  }

  // Get Listed Details
  getMiscDetailsList(){
    this.miscListRef = this.db.list('/misc-other');
    return this.miscListRef;
  }

  // Update Details - If you delete some etc
  updateMiscDetails(id, misc:Misc){
    return this.miscRef.update({
      brand: misc.brand,
      description: misc.description,
      barcode: misc.barcode,
      quantity: misc.quantity,
      bbdate: misc.bbdate
    })
  }

  // Delete Out of Date Products
  deleteMiscProduct(id: string){
    this.miscRef = this.db.object('/misc-other/' + id);
    this.miscRef.remove();
  }

}
