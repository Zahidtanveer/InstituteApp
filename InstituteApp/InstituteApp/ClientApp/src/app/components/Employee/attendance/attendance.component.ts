import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { EmployeeAttendanceService, EmployeeAttendanceData } from '../../../services/employee/service.attendance'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-EmployeeAttendance',
    templateUrl: './attendance.component.html'
})

export class EmployeeAttendanceComponent {

    public dList: EmployeeAttendanceData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _employeeAttendanceService: EmployeeAttendanceService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/EmployeeAttendance/Index').subscribe(result => {
            this.dList = result.json() as EmployeeAttendanceData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 10,
                ordering: false,
                "pagingType": "full_numbers",
              });
        }, error => console.error(error));
        this.getEmployeeAttendances;

    }

    getEmployeeAttendances() {
        this._employeeAttendanceService.getEmployeeAttendance()
            .subscribe(data => { this.dList = data });
    }

    SaveData() {

    }

}

