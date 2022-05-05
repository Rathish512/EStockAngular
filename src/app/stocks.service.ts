import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:7071/e-stock/api/v1/stock/getStockByCompanyCode/";

  fetchStocks(id:any) {
    return this.http.get(this.url+id);
  }
}
