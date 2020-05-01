import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataElement } from '../interfaces/data-element';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  rootUrl:string = 'http://localhost:44392/api/expenses';

  constructor(private httpclient: HttpClient) { }

  getData(){
    return this.httpclient.get(this.rootUrl);
  }

  addOrUpdateEntry(exp){
    return this.httpclient.post(this.rootUrl, exp);
  }
}
