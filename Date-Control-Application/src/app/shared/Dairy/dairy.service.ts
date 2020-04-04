import { Injectable } from '@angular/core';
import { Dairy } from './Dairy';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DairyService {
dpListRef: AngularFireList<any>;
dpRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Details
  enterDpDetails(dp: Dairy) {
    return this.dpListRef.push({
      brand: dp.brand,
      description: dp.description,
      barcode: dp.barcode,
      quantity: dp.quantity,
      bbdate: dp.bbdate
    })
  }

  // Get Single Details
  getDpDetails(id: string){
    this.dpRef = this.db.object('/dairy/' + id);
    return this.dpRef;
  }

  // Get Listed Details
  getDpDetailsList(){
    this.dpListRef = this.db.list('/dairy');
    return this.dpListRef;
  }

  // Update Details - If you delete some etc
  updateDpDetails(id, dp:Dairy){
    return this.dpRef.update({
      brand: dp.brand,
      description: dp.description,
      barcode: dp.barcode,
      quantity: dp.quantity,
      bbdate: dp.bbdate
    })
  }

  // Delete Out of Date Products
  deleteDpProduct(id: string){
    this.dpRef = this.db.object('/dairy/' + id);
    this.dpRef.remove();
  }
}
