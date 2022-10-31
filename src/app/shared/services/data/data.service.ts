import { delay, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: {[key: string]: any[]} = {}

  constructor() {
    this.data['clients'] = []

    for(let i = 1; i <= 16; i++) {
      this.data['clients'].push({
        id: i,
        name: `client ${i}`
      })
    }
  }


  getData(keyName: string, delayMs = 500) {
    return of(this.data[keyName]).pipe(delay(delayMs))
  }

  getDataPaginated(keyName: string, currentPage: number, itemsPerPage: number = 5, delayMs = 500) {
    let start = itemsPerPage * (currentPage-1)
    let end = start + itemsPerPage

    let response = {
      data: this.data[keyName].slice(start, end),
      totalPages: Math.ceil(this.data[keyName].length / itemsPerPage)
    }

    return  of(response).pipe(delay(delayMs))
  }

}
