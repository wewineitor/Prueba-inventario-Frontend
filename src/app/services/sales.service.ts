import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/sale/list');
  }

  saveSale(data: any): Observable<any> {
    const url = 'http://localhost:8080/api/sale';
    return this.http.post(url, data);
  }
}
