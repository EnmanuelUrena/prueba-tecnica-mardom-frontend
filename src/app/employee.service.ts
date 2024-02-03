import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Models/Employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiUrl = 'http://localhost:5111/api';
  
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + '/employee');
  }
}
