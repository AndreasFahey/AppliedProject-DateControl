import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateDairyPage } from './update-dairy.page';

describe('UpdateDairyPage', () => {
  let component: UpdateDairyPage;
  let fixture: ComponentFixture<UpdateDairyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDairyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateDairyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
