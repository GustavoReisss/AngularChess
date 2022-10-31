import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedTableAsyncComponent } from './paginated-table-async.component';

describe('PaginatedTableAsyncComponent', () => {
  let component: PaginatedTableAsyncComponent;
  let fixture: ComponentFixture<PaginatedTableAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatedTableAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedTableAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
