import { Injectable } from '@angular/core';
import { Meats } from './Meats';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MeatsService {
meListRef: AngularFireList<any>;
meRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Details
  enterMeDetails(me: Meats) {
    return this.meListRef.push({
      brand: me.brand,
      description: me.description,
      barcode: me.barcode,
      quantity: me.quantity,
      bbdate: me.bbdate
    })
  }

  // Get Single Details
  getMeDetails(id: string){
    this.meRef = this.db.object('/meats/' + id);
    return this.meRef;
  }

  // Get Listed Details
  getMeDetailsList(){
    this.meListRef = this.db.list('/meats');
    return this.meListRef;
  }

  // Update Details - If you delete some etc
  updateMeDetails(id, me:Meats){
    return this.meRef.update({
      brand: me.brand,
      description: me.description,
      barcode: me.barcode,
      quantity: me.quantity,
      bbdate: me.bbdate
    })
  }

  // Delete Out of Date Products
  deleteMeProduct(id: string){
    this.meRef = this.db.object('/meats/' + id);
    this.meRef.remove();
  }

}
