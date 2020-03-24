import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfectioneryCrispsPage } from './confectionery-crisps.page';

describe('ConfectioneryCrispsPage', () => {
  let component: ConfectioneryCrispsPage;
  let fixture: ComponentFixture<ConfectioneryCrispsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfectioneryCrispsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfectioneryCrispsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
