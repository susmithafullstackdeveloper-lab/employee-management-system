import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  searchText = '';
  employee: Employee = { name: '', email: '', department: '', designation: '', salary: 0 };
  editId?: number;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(res => this.employees = res.content ?? res);
  }

  saveEmployee(): void {
    if (this.editId) {
      this.employeeService.updateEmployee(this.editId, this.employee).subscribe(() => {
        this.resetForm();
        this.loadEmployees();
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe(() => {
        this.resetForm();
        this.loadEmployees();
      });
    }
  }

  editEmployee(emp: Employee): void {
    this.employee = { ...emp };
    this.editId = emp.id;
  }

  deleteEmployee(id?: number): void {
    if (!id) return;
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }

  searchEmployee(): void {
    if (!this.searchText.trim()) {
      this.loadEmployees();
      return;
    }
    this.employeeService.search(this.searchText).subscribe(res => this.employees = res);
  }

  resetForm(): void {
    this.employee = { name: '', email: '', department: '', designation: '', salary: 0 };
    this.editId = undefined;
  }
}
