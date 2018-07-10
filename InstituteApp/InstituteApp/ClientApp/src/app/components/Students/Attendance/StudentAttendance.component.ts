import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentAttendanceService, StudentAttendanceData } from '../../../services/student/service.attendance'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-StudentAttendance',
    templateUrl: './StudentAttendance.component.html'
})

export class StudentAttendanceComponent {

    public dList: StudentAttendanceData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _studentAttendanceService: StudentAttendanceService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/StudentAttendance/Index').subscribe(result => {
            this.dList = result.json() as StudentAttendanceData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, error => console.error(error));
        this.getStudentAttendances;

    }

    getStudentAttendances() {
        this._studentAttendanceService.getStudentAttendance()
            .subscribe(data => { this.dList = data });
    }
    SaveData() {
        var RowData = this.dataTable.rows().data().length;
        alert(RowData);
    }
    

}

