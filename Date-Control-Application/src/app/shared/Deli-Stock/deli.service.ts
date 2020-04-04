import { Injectable } from '@angular/core';
import { Deli } from './Deli';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DeliService {
  dsListRef: AngularFireList<any>;
  dsRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

// Enter Product Details
enterDsDetails(ds: Deli) {
  return this.dsListRef.push({
    brand: ds.brand,
    description: ds.description,
    batchcode: ds.batchcode,
    barcode: ds.barcode,
    quantity: ds.quantity,
    bbdate: ds.bbdate
  })
}

// Get Single Details
getDsDetails(id: string){
  this.dsRef = this.db.object('/deli-stock/' + id);
  return this.dsRef;
}

// Get Listed Details
getDsDetailsList(){
  this.dsListRef = this.db.list('/deli-stock');
  return this.dsListRef;
}

// Update Details - If you delete some etc
updateDsDetails(id, ds:Deli){
  return this.dsRef.update({
    brand: ds.brand,
    description: ds.description,
    batchcode: ds.batchcode,
    barcode: ds.barcode,
    quantity: ds.quantity,
    bbdate: ds.bbdate
  })
}

// Delete Out of Date Products
deleteDsProduct(id: string){
  this.dsRef = this.db.object('/deli-stock/' + id);
  this.dsRef.remove();
}

}
