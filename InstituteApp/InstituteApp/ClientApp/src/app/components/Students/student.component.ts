import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { StudentService, StudentData } from '../../services/student/service.student'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Student',
    templateUrl: './Student.component.html'
})

export class StudentComponent {

    public dList: StudentData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _studentService: StudentService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Student/Index').subscribe(result => {
            this.dList = result.json() as StudentData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getStudents;

    }

    getStudents() {
        this._studentService.getStudent()
            .subscribe(data => { this.dList = data });
    }

    delete(StudentID) {

        this.alertService.showDialog('Are you sure you want to delete this Student with Id:' + StudentID, DialogType.confirm, () => this.deletehelper(StudentID));

    }

    deletehelper(StudentID) {
        this._studentService.deleteStudent(StudentID).subscribe((data) => {
            this.getStudents();
        }, error => console.error(error))
    }

}

