import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { EmployeeService, EmployeeData } from '../../services/employee/service.employee'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Employee',
    templateUrl: './Employee.component.html'
})

export class EmployeeComponent {

    public dList: EmployeeData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _EmployeeService: EmployeeService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Employee/Index').subscribe(result => {
            this.dList = result.json() as EmployeeData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getEmployees;

    }

    getEmployees() {
        this._EmployeeService.getEmployee()
            .subscribe(data => { this.dList = data });
    }

    delete(employeeID) {

        this.alertService.showDialog('Are you sure you want to delete this Employee with Id:' + employeeID, DialogType.confirm, () => this.deletehelper(employeeID));

    }

    deletehelper(employeeID) {
        this._EmployeeService.deleteEmployee(employeeID).subscribe((data) => {
            this.getEmployees();
        }, error => console.error(error))
    }

}

