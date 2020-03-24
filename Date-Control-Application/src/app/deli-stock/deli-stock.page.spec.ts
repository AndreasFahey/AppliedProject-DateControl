import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliStockPage } from './deli-stock.page';

describe('DeliStockPage', () => {
  let component: DeliStockPage;
  let fixture: ComponentFixture<DeliStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliStockPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
