import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiscuitsCakesPage } from './biscuits-cakes.page';

describe('BiscuitsCakesPage', () => {
  let component: BiscuitsCakesPage;
  let fixture: ComponentFixture<BiscuitsCakesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiscuitsCakesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiscuitsCakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
