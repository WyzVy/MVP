import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaruserComponent } from './listaruser.component';

describe('ListaruserComponent', () => {
  let component: ListaruserComponent;
  let fixture: ComponentFixture<ListaruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaruserComponent]
    });
    fixture = TestBed.createComponent(ListaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
