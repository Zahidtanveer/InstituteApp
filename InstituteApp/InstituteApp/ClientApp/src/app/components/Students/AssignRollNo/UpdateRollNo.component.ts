import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentService, StudentData, UpdateRollNo } from '../../../services/student/service.student'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { BatchData, CourseData, DataService } from '../../../services/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'Student-UpdateRollNo',
    templateUrl: './UpdateRollNo.component.html'
})

export class UpdateRollNoComponent {
    public updateList: UpdateRollNo[];
    public dList: StudentData[];
    public batchList: BatchData[];
    public courseList: CourseData[];
    public subBatchList: BatchData[];
    studentForm: FormGroup;
    errorMessage: any;
    dataTable: any;
    public IsCourseSelected: boolean;
    constructor(private _router: Router, private _fb: FormBuilder,private _dataService: DataService,
        private _studentService: StudentService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
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
          
            this.getStudents(CourseSelectedValue, batchSelectedValue, '');
        }

    }

    getStudents(course, batch, date) {
        this._studentService.filterStudent(course, batch, date)
            .subscribe(data => {
                this.dList = data
               
            });

    }

   
    SaveData() {
        
        var dictRollNo = [];
        $('table tr input[type=text]').each(function () {
            var str = $(this).val();
            var tRowId = this.closest('tr').children.item(0).innerHTML;
            dictRollNo.push({
                id: tRowId,
                rollNo: str
            });
            
        });
        this.updateList = dictRollNo;
        console.log(this.updateList);
        this.UpdateRollNo(this.updateList);

    }
    UpdateRollNo(studentData) {

        this._studentService.UpdateStudentRollNo(studentData)
                .subscribe(data => {
                    this._router.navigate(['/student-rollno']
                    );
                });
    }

}
