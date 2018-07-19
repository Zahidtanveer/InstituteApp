import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AllocateBatchTeacherService } from '../../services/AllocatedBatchTeacher.service'
import { CourseService } from '../../services/CourseAndBatch/course.service'
import { BatchService } from '../../services/CourseAndBatch/batch.service'
import * as $ from 'jquery';
import { EmployeeData, EmployeeService } from '../../services/employee/service.employee';
@Component({
    selector: 'editAllocateBatchTeacher',
    templateUrl: './EditAllocateBatchTeacher.component.html'
})
export class editAllocateBatchTeacher implements OnInit {
    public courseList: CourseData[];
    public batchList: BatchData[];
    public subbatchList: BatchData[];
    public employeeList: EmployeeData[];
    allocateBatchTeacherForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;
    IsCourseSelected: boolean;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _allocateBatchTeacherService: AllocateBatchTeacherService,
        private _batchService: BatchService, private _courseService: CourseService, private _employeeService: EmployeeService,private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.allocateBatchTeacherForm = this._fb.group({
            id: 0,
            batchId: ['', [Validators.required]],
            courseId: ['', [Validators.required]],
            teacherId: ['', [Validators.required]],
            course:[''],
            batches:['']
        })
        this.getEmployees();
        this.getCourses();
        this.getBatchs();
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._allocateBatchTeacherService.getAllocateBatchTeacherById(this.id)
                .subscribe(resp => this.allocateBatchTeacherForm.setValue(resp)
                    , error => this.errorMessage = error);
          
        }
        
    }
    OnCourseSelection($event: any) {
        var courseSelectedValue = this.allocateBatchTeacherForm.controls["courseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(x => x.courseId == courseSelectedValue && x !== null);
            this.IsCourseSelected = true;
        }
    }
    OnBatchSelection($event:any) {
        var courseSelectedValue = this.allocateBatchTeacherForm.controls["courseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(x => x.courseId == courseSelectedValue && x !== null);
            this.IsCourseSelected = true;
        }
    }
    getEmployees() {
        this._employeeService.getEmployee()
            .subscribe(data => { this.employeeList = data });
    }
    getCourses() {
        this._courseService.getCourse()
            .subscribe(data => { this.courseList = data });
    }
    getBatchs() {
        this._batchService.getBatch()
            .subscribe(data => { this.batchList = data });
    }
    save() {
        if (!this.allocateBatchTeacherForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._allocateBatchTeacherService.updateAllocateBatchTeacher(this.allocateBatchTeacherForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/batchteacherallocation']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/batchteacherallocation']);
    }
    get courseId() { return this.allocateBatchTeacherForm.get('courseId'); }
    get batchId() { return this.allocateBatchTeacherForm.get('batchId'); }
    get teacherId() { return this.allocateBatchTeacherForm.get('teacherId'); }
    get course() { return this.allocateBatchTeacherForm.get('course'); }
    get batches() { return this.allocateBatchTeacherForm.get('batches'); }

   
}
interface CourseData {
    id: number;
    name: string;
    dscription: string;
    code: string;
    maxAttandencePercentage: string
    totalWorkingDays: number
    syllabusName: string;
    attendanceType: string;
}
interface BatchData {
    id: number;
    name: string;
    courseId: number;
    startDate: string;
    endDate: string;
    maxNumberOfStudent: string;
}
