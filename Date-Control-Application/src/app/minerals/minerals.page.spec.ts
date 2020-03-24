import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MineralsPage } from './minerals.page';

describe('MineralsPage', () => {
  let component: MineralsPage;
  let fixture: ComponentFixture<MineralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MineralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
