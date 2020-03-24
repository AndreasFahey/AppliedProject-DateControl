import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerealMuesliPage } from './cereal-muesli.page';

describe('CerealMuesliPage', () => {
  let component: CerealMuesliPage;
  let fixture: ComponentFixture<CerealMuesliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerealMuesliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerealMuesliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
