import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentAttendanceService, StudentAttendanceData } from '../../../services/student/service.attendance'
import { DataService, BatchData, CourseData } from '../../../services/data.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'fetch-StudentAttendance',
    templateUrl: './StudentAttendance.component.html'
})

export class StudentAttendanceComponent {

    public dList: StudentAttendanceData[];
    public batchList: BatchData[];
    public courseList: CourseData[];
    public subBatchList: BatchData[];
    studentForm: FormGroup;
    errorMessage: any;
    dataTable: any;
    
    public IsInitialized: boolean = false;
    public IsCourseSelected: boolean;
    public IsBatchSelected: boolean = false;
    constructor(private _fb: FormBuilder,http: Http, @Inject('BASE_URL') baseUrl: string, private _studentAttendanceService: StudentAttendanceService, private alertService: AlertService,
        private chRef: ChangeDetectorRef, private _dataService: DataService) {
        this.studentForm = this._fb.group({
            Course: [''],
            Batch: [''],
            Date:['']
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
    
    getStudentAttendances(batch, course, date) {
        this._studentAttendanceService.getStudentAttendance(batch,course,date)
            .subscribe(data => { this.dList = data });
    }
    OnCourseSelection($event: any) {
        var courseID = this.studentForm.controls["Course"].value;
        this.IsCourseSelected = false;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x !== null);
           this.IsCourseSelected = true;

        }
     
    }
    OnBatchChange($event: any) {
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        if (batchSelectedValue) {
            this.IsBatchSelected = true;
        }
    }
    OnDateChange($event: any) {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        var DateSelectedValue = this.studentForm.controls["Date"].value;
        this.getStudentAttendances( batchSelectedValue,CourseSelectedValue, DateSelectedValue);
        if (this.IsInitialized == false) {
            this.filter();
            this.IsInitialized = true;
        }
     }
    filter() {

      this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
    }
    SaveData() {
        var RowData = this.dataTable.rows().data().length;
        alert(RowData);
    }
    
    get Course() { return this.studentForm.get('Course'); }
    get Batch() { return this.studentForm.get('Batch'); }
    get Date() { return this.studentForm.get('Date'); }
}

