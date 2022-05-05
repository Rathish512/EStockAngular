import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {StocksService} from './stocks.service';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let stockService:StocksService;
  let httpTestingController:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[StocksService,
      {provide:HttpClient}]
    }).compileComponents();
    fixture=TestBed.createComponent(AppComponent);
  });

  beforeEach(()=>{
    component=fixture.componentInstance;
    fixture.detectChanges();
    stockService=TestBed.inject(StocksService);
    httpClient=TestBed.inject(HttpClient);
    httpTestingController=TestBed.inject(HttpTestingController);
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'E-Stock'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('E-Stock');
  });

  it('is successfully instantiated',()=>{
    expect(component instanceof AppComponent).toEqual(true);
  });

  it('should toggleShowtable toggle correctly', () => {
    component.showTable=false;
    component.toggleShowTable();
    expect(component.showTable).toBe(true);
  });

  it('should have a header E-Stock Application',fakeAsync(()=>{
    let element = fixture.nativeElement;
    expect(element.querySelector('h1').innerHTML).toBe('E-Stock Application');
  }))
});
