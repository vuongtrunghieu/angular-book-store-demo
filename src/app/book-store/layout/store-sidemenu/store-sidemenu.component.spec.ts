import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSidemenuComponent } from './store-sidemenu.component';

describe('StoreSidemenuComponent', () => {
  let component: StoreSidemenuComponent;
  let fixture: ComponentFixture<StoreSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreSidemenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
