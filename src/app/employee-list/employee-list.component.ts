import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.employees = [{
      "id": 1,
      "firstName": "First 1",
      "lastName": "Last 1",
      "emailId": "First1@gmmail.com"
    },
    {
      "id": 2,
      "firstName": "First2",
      "lastName": "Last2",
      "emailId": "First2@gmmail.com"
    }
    ]
  }

}
