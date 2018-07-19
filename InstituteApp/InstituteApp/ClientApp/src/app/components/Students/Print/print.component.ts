import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentService, StudentData } from '../../../services/student/service.student';
import { DataService, BatchData, CountryData, CourseData } from '../../../services/data.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'print-student',
    templateUrl: './print.component.html'
})

export class PrintStudentComponent {

    public dList: StudentData[];
    public batchList: BatchData[];
    public courseList: CourseData[];
    public subBatchList: BatchData[];
    studentForm: FormGroup;
    errorMessage: any;
    dataTable: any;
    public IsCourseSelected: boolean;

    constructor(private _fb: FormBuilder, http: Http,
        private _studentService: StudentService, private alertService: AlertService,
        private chRef: ChangeDetectorRef, private _dataService: DataService) {
        this.studentForm = this._fb.group({
            Course: [''],
            Batch: ['']
        })
        this.getCourse();
        this.getBatch();
    }

    getBatch() {
        this._dataService.getBatch()
            .subscribe(data => { this.batchList = data });
    }

    getCourse() {
        this._dataService.getCourse()
            .subscribe(data => { this.courseList = data });
    }


    OnCourseSelection($event: any) {
        var courseName = this.studentForm.controls["Course"].value;
        this.IsCourseSelected = false;
        if (courseName) {
            var courseID = this.courseList.filter(c => c.name == courseName && c != null);
            console.log(courseID);
            if (courseID) {
                this.subBatchList = this.batchList.filter(x => x.courseId == courseID[0].id && x !== null);
            }
            this.IsCourseSelected = true;

        }
        this.studentForm.controls["Batch"].setValue("");
    }

    OnBatchChange($event: any) {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        if (batchSelectedValue) {
            this.RefreshTable();
            this.getStudents(CourseSelectedValue, batchSelectedValue, '');
        }

    }

    getStudents(course, batch, date) {
        this._studentService.filterStudent(course, batch, date)
            .subscribe(data => {
                this.dList = data
                    this.print();
            });
        
        }

    print() {
        this.chRef.detectChanges();
        const table: any = $('#dttable');
        this.dataTable = table.DataTable({
            "paging": false,
            "ordering": false,
            "searching": false,
            "bInfo": false,
            dom: 'Bfrtip',
            buttons: [{
                extend: 'print',
                text: '<i class="fa fa-print" aria-hidden="true"></i> Print',
                title: 'List of Students',
                titleAttr: 'Print',
                className: 'btn btn-danger'
            }
            ]
        });
    }
    RefreshTable() {
        const table: any = $('#dttable');
        table.DataTable().destroy();
    }
   
    get Course() { return this.studentForm.get('Course'); }
    get Batch() { return this.studentForm.get('Batch'); }

}
