import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { LimitOffset } from '../../interfaces/LimitOffset';

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input()
  public total!: number;
  @Input()
  public offset!: number;
  @Input()
  public limit!: number;

  @Output()
  public setNewPage = new EventEmitter<LimitOffset>();

  public totalPages: number = 0;
  public currentPage: number = 0;
  public pages: number[] = [];


  ngOnInit(): void {
    const { total, limit, offset } = this;
    if(total === undefined || limit === undefined || offset === undefined) {
      throw "You must provide total, limit and offset!";
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setInfo();
  }

  setInfo() {
    const { total, limit, offset } = this;
    this.totalPages = Math.ceil(total / limit);
    this.currentPage = Math.floor(offset / limit) + 1;

    this.generatePagesArray();
  }


  generatePagesArray() {
    let init;
    let end;

    if(this.totalPages > 5) {
      if(this.currentPage < 3) {
        init = 1;
        end = 5;
      } else if(this.currentPage > this.totalPages - 2) {
        init = this.totalPages - 4;
        end = this.totalPages;
      } else {
        init = this.currentPage - 2;
        end = this.currentPage + 2;
      }
    } else {
      init = 1;
      end = this.totalPages;
    }

    const pages = []
    for(let i = init; i <= end; i++) {
      pages.push(i);
    }
    this.pages = pages;
  }


  selectPage(page: number) {
    const newOffset = this.limit * (page - 1);
    this.offset = newOffset;
    this.setInfo();
    this.setNewPage.emit({ 
      limit: this.limit,
      offset: newOffset,
    })
  }
  
}
