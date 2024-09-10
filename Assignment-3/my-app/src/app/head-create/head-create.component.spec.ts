import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCreateComponent } from './head-create.component';

describe('HeadCreateComponent', () => {
  let component: HeadCreateComponent;
  let fixture: ComponentFixture<HeadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
