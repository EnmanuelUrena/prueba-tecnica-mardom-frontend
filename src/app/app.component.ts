import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './Models/Employee.model';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [EmployeeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'prueba-tecnica-mardom-frontend';
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    },
      () => {
        alert('Error al cargar los empleados')
      }
    );
  }
}
