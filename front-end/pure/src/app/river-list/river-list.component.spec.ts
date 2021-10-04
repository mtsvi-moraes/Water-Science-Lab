import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverListComponent } from './river-list.component';

describe('RiverListComponent', () => {
  let component: RiverListComponent;
  let fixture: ComponentFixture<RiverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
