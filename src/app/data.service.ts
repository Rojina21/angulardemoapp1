import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Example method to fetch data from the backend
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  // Example method to add data to the backend
  addData(newData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, newData);
  }

  // Example method to update data in the backend
  updateData(id: string, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/data/${id}`, updatedData);
  }

  // Example method to delete data from the backend
  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/data/${id}`);
  }
}
