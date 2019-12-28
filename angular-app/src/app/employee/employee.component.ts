import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployess().subscribe(data => this.employees = data);
  }

}
