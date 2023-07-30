import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from '../../../../src/app/shared/components/pagination/pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.limit = 10;
    component.offset = 0;
    component.total = 70;
    component.ngOnChanges({})
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('limit=10, offset=0 and total=70', () => {
    component.limit = 10;
    component.offset = 0;
    component.total = 70;
    component.ngOnChanges({});
    expect(component.totalPages).toBe(7);
    expect(component.currentPage).toBe(1);
    expect(component.pages).toMatchObject([1, 2, 3, 4, 5]);
  });

  it('limit=5, offset=15 and total=17', () => {
    component.limit = 5;
    component.offset = 15;
    component.total = 27;
    component.ngOnChanges({});
    expect(component.totalPages).toBe(6);
    expect(component.currentPage).toBe(4);
    expect(component.pages).toMatchObject([2, 3, 4, 5, 6]);
  });

  it('limit=5, offset=35 and total=39', () => {
    component.limit = 5;
    component.offset = 35;
    component.total = 39;
    component.ngOnChanges({});
    expect(component.totalPages).toBe(8);
    expect(component.currentPage).toBe(8);
    expect(component.pages).toMatchObject([4, 5, 6, 7, 8]);
  });

  it('selectPage(5) should emit limit=10, offset=40', () => {
    jest.spyOn(component.setNewPage, 'emit');
    component.selectPage(5);
    expect(component.setNewPage.emit).toHaveBeenCalledWith({
      limit: 10, 
      offset: 40
    });
  });

  it('selectPage(3) should emit limit=5, offset=10', () => {
    component.limit = 5;
    component.total = 39;
    component.ngOnChanges({});
    jest.spyOn(component.setNewPage, 'emit');
    component.selectPage(3);
    expect(component.setNewPage.emit).toHaveBeenCalledWith({
      limit: 5, 
      offset: 10
    });
  });
  
});
