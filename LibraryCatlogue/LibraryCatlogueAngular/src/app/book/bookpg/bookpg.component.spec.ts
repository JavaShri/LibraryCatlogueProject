import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpgComponent } from './bookpg.component';

describe('BookpgComponent', () => {
  let component: BookpgComponent;
  let fixture: ComponentFixture<BookpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookpgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
