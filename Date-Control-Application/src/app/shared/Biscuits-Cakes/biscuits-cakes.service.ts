import { Injectable } from '@angular/core';
import { BiscuitsCakes } from './BiscuitsCakes';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BiscuitsCakesService {
bcListRef: AngularFireList<any>;
bcRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Enter Product Deatils
  enterBcDetails(bc: BiscuitsCakes) {
    return this.bcListRef.push({
      brand: bc.brand,
      description: bc.description,
      barcode: bc.barcode,
      quantity: bc.quantity,
      bbdate: bc.bbdate
    })
  }

  // Get Single Details
  getBcDetails(id: string){
    this.bcRef = this.db.object('/biscuits-cakes/' + id);
    return this.bcRef;
  }

  // Get Listed Details
  getBcDetailsList(){
    this.bcListRef = this.db.list('/biscuits-cakes');
    return this.bcListRef;
  }

  // Update Deatils - If you delete some etc
  updateBcDetails(id, bc:BiscuitsCakes){
    return this.bcRef.update({
      brand: bc.brand,
      description: bc.description,
      quantity: bc.quantity
    })
  }

  // Delete Out of Date Products
  deleteBcProduct(id: string){
    this.bcRef = this.db.object('/biscuits-cakes/' + id);
    this.bcRef.remove();
  }


}
