import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrozenPage } from './frozen.page';

describe('FrozenPage', () => {
  let component: FrozenPage;
  let fixture: ComponentFixture<FrozenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrozenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
