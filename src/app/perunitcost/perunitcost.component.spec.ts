import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerunitcostComponent } from './perunitcost.component';

describe('PerunitcostComponent', () => {
  let component: PerunitcostComponent;
  let fixture: ComponentFixture<PerunitcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerunitcostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerunitcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
