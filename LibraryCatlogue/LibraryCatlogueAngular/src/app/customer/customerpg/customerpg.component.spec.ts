import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpgComponent } from './customerpg.component';

describe('CustomerpgComponent', () => {
  let component: CustomerpgComponent;
  let fixture: ComponentFixture<CustomerpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerpgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
