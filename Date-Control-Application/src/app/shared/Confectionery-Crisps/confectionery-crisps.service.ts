import { Injectable } from '@angular/core';
import { ConfecCrisps } from './ConfecCrisps';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConfectioneryCrispsService {
ccListRef: AngularFireList<any>;
ccRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Deatils
  enterCcDetails(cc: ConfecCrisps) {
    return this.ccListRef.push({
      brand: cc.brand,
      description: cc.description,
      barcode: cc.barcode,
      quantity: cc.quantity,
      bbdate: cc.bbdate
    })
  }

  // Get Single Details
  getCcDetails(id: string){
    this.ccRef = this.db.object('/confectionery-crisps/' + id);
    return this.ccRef;
  }

  // Get Listed Details
  getCcDetailsList(){
    this.ccListRef = this.db.list('/confectionery-crisps');
    return this.ccListRef;
  }

  // Update Deatils - If you delete some etc
  updateCcDetails(id, cc:ConfecCrisps){
    return this.ccRef.update({
      brand: cc.brand,
      description: cc.description,
      barcode: cc.barcode,
      quantity: cc.quantity,
      bbdate: cc.bbdate
    })
  }

  // Delete Out of Date Products
  deleteCcProduct(id: string){
    this.ccRef = this.db.object('/confectionery-crisps/' + id);
    this.ccRef.remove();
  }
}
