import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DairyPage } from './dairy.page';

describe('DairyPage', () => {
  let component: DairyPage;
  let fixture: ComponentFixture<DairyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DairyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
