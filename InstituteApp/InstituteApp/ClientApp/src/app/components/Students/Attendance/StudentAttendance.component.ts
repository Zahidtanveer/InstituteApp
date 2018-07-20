import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentAttendanceService, StudentAttendanceData, UpdateAttendance } from '../../../services/student/service.attendance'
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
    public updateList: UpdateAttendance[];
    studentForm: FormGroup;
    errorMessage: any;
    dataTable: any;
    
    public IsInitialized: boolean = false;
    public IsCourseSelected: boolean;
    public IsBatchSelected: boolean;
    constructor(private _fb: FormBuilder, private _router: Router,http: Http, @Inject('BASE_URL') baseUrl: string, private _studentAttendanceService: StudentAttendanceService, private alertService: AlertService,
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
        this.IsCourseSelected = false;
        var courseID = this.studentForm.controls["Course"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x !== null);
           this.IsCourseSelected = true;

        }
     
    }

    OnBatchChange($event: any) {
        this.IsBatchSelected = false;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
    
        if (batchSelectedValue) {
            this.IsBatchSelected = true;
        }
        this.getData();
        $('.checkAll').prop('checked', false);
    }

    OnDateChange($event: any) {

        this.getData();
        $('.checkAll').prop('checked', false);
    }

    getData() {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        var DateSelectedValue = this.studentForm.controls["Date"].value;
        this.getStudentAttendances(batchSelectedValue, CourseSelectedValue, DateSelectedValue);

    }

    
    ApplyDataTable() {

      this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "paging": false,
                "ordering": false,
                "searching": false,
                "bInfo": false
             });
    }
    //Save Data of Attendance to Database
    SaveData() {
        if (this.IsInitialized == false) {
            this.ApplyDataTable();
            this.IsInitialized = true;
        }
        var dictAttendance = [];

        // General/modular function for status logging
            var checkboxChecker = function () {
                $('table tr').each(function (i) {
                    // Only check rows that contain a checkbox
                    var $chkbox = $(this).find('.isPresent');
                    if ($chkbox.length) {
                        var status = $chkbox.prop('checked');
                        console.log('Table row ' + i + ' contains a checkbox with a checked status of: ' + status);
                        var tRowId = this.closest('tr').children.item(0).innerHTML;
                        dictAttendance.push({
                            key: tRowId,
                            value: status
                        });
                       
                    }
                });
            };
           
        // Check checkboxes status on DOMready
        checkboxChecker();

        console.log(dictAttendance);
        this.updateList = dictAttendance;
        console.log("Assign....");
        console.log(this.updateList);
        //Post Data
        if (this.updateList) {
            this.MarkStudentAttendances(this.updateList);
            $('.checkAll').prop('checked', false);
        }
    }
    //Check or Uncheck all row
    CheckAll() {
    
        $(".checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
        });
        
    }
    //Mark Attendance Method
    MarkStudentAttendances(studentData) {
        this._studentAttendanceService.saveStudentAttendance(studentData)
            .subscribe(data => {
                this._router.navigate(['/studentattendance']
                );
            });
    }

    get Course() { return this.studentForm.get('Course'); }
    get Batch() { return this.studentForm.get('Batch'); }
    get Date() { return this.studentForm.get('Date'); }
}

