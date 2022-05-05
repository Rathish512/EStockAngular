import { Component } from '@angular/core';
import {StocksService} from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Stock';
  showTable:boolean=false;
  listStocks$:any;

  toggleShowTable(): void {
    this.showTable = !this.showTable;
}

constructor(private stocks:StocksService) { }

fetchDetails(code:any) {
  this.stocks.fetchStocks(code).subscribe(data=>{
    this.listStocks$=data;
  })
}

}
