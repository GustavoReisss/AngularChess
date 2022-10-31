import { Component, OnInit } from '@angular/core';

interface data {
  id: number,
  name: string
}

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit  {
  // page controls settings
  itemsPerPage = 5
  page = 1
  numOptions = 2

  // table data
  data: data[] = []
  _rows: data[] = []
  _filteredData: data[]

  // filters
  filterText = ''

  
  constructor() {
    for(let i = 1; i <= 1000; i++) {
      this.data.push({
        id: i,
        name: ` row ${i}`
      })
    }

    this._filteredData = this.data
  }

  ngOnInit(): void {
    this.setPage(this.page)
  }


  // Pagination
  get numPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage)
  }

  get rows() {
    return this._rows
  }

  setPage(pageNum: number) {
    this.page = pageNum

    let start = this.itemsPerPage * (this.page-1)
    let end = start + this.itemsPerPage
    this._rows = this.filteredData.slice(start, end)
  }

  canChangePage(num: number) {
    const nextValue = this.page + num
    return nextValue > 0 && nextValue <= this.numPages
  }

  changePage(num: number) {
    if(!this.canChangePage(num)) return
    this.setPage(num + this.page)
  }

  // Filter
  filterRows(){
    this._filteredData = this.data.filter(el => 
      el.name.toLocaleLowerCase().includes(this.filterText.toLowerCase()))

    this.setPage(1)
  }


  get filteredData() {
    return this._filteredData
  }
}
