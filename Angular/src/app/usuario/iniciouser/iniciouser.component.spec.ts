import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciouserComponent } from './iniciouser.component';

describe('IniciouserComponent', () => {
  let component: IniciouserComponent;
  let fixture: ComponentFixture<IniciouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciouserComponent]
    });
    fixture = TestBed.createComponent(IniciouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
