import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkcategorypgComponent } from './bkcategorypg.component';

describe('BkcategorypgComponent', () => {
  let component: BkcategorypgComponent;
  let fixture: ComponentFixture<BkcategorypgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BkcategorypgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BkcategorypgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
