import { TestBed } from '@angular/core/testing';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { StocksService } from './stocks.service';

describe('StocksService', () => {
  let service: StocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[StocksService,
      {provide:HttpClient}]
    });
    service = TestBed.inject(StocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
