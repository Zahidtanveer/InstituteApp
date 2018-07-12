import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentService, StudentData } from '../../../services/student/service.student'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { CourseData, BatchData, DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'Student-IDCard',
    templateUrl: './studentIDCard.component.html'
})

export class StudentIDCardComponent {

    public batchList: BatchData[];
    public courseList: CourseData[];
    public subBatchList: BatchData[];
    public dList: StudentData[];
    studentForm: FormGroup;
    errorMessage: any;
    dataTable: any;
    public IsCourseSelected: boolean;
    constructor(private _fb: FormBuilder,http: Http, private _studentService: StudentService, private alertService: AlertService,
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
        this.getStudents('','','');
     }
    OnBatchChange($event: any) {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        this.getStudents(CourseSelectedValue, batchSelectedValue, '');
        
    }

    getStudents(course, batch, date) {
        this._studentService.filterStudent(course, batch, date)
            .subscribe(data => { this.dList = data });
        
    }
    
    PrintIDCard() {

    }
    get Course() { return this.studentForm.get('Course'); }
    get Batch() { return this.studentForm.get('Batch'); }
}
