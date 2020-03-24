import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscOtherPage } from './misc-other.page';

describe('MiscOtherPage', () => {
  let component: MiscOtherPage;
  let fixture: ComponentFixture<MiscOtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscOtherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
