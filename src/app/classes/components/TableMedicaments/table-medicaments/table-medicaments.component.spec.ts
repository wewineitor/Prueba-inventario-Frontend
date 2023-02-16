import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMedicamentsComponent } from './table-medicaments.component';

describe('TableMedicamentsComponent', () => {
  let component: TableMedicamentsComponent;
  let fixture: ComponentFixture<TableMedicamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMedicamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMedicamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
