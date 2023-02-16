import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  private apiUrl = 'http://localhost:8080/api/medicament/list';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteMedicament(name: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/medicament/${name}`);
  }

  saveMedicament(formData: any): Observable<any> {
    const url = 'http://localhost:8080/api/medicament';
    return this.http.post(url, formData);
  }

  updateMedicament(name:any, formData: any): Observable<any> {
    console.log(name);
    console.log(formData);
    const url = `http://localhost:8080/api/medicament/${name}`
    return this.http.put(url, formData).pipe(
      catchError(error => {
        console.error('Error actualizando usuario', error);
        throw error;
      })
    );
  }
}
