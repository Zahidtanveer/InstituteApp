import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SubjectAllocationService } from '../../services/subjects/SubjectAllocation.service'
import { BatchData, CourseData, DataService, DepartmentData } from '../../services/data.service';
import { EmployeeService, EmployeeData } from '../../services/employee/service.employee';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'createTimeTable',
    templateUrl: './AddTimeTable.component.html'
})
export class createTimeTable {
  
    public teacherList: EmployeeData[];
    public subteacherList: EmployeeData[];
    public courseList: CourseData[];
    public batchList: BatchData[];
    public subBatchList: BatchData[];

    title: string = "Create";
    timeTableForm: FormGroup;
    errorMessage: any;

    @ViewChild('weekDayModal')
    weekDayModal: ModalDirective;

    constructor(private _fb: FormBuilder, private _router: Router,
        private _dataService: DataService, private _employeeService: EmployeeService) {

        this.timeTableForm = this._fb.group({
            id: 0,
            CourseId: ['', [Validators.required]],
            BatchId: ['', [Validators.required]],
            Name: ['', [Validators.required]],
            WeekDays: ['', [Validators.required]]
        })
      
       
        this.getCourse();
        this.getBatch();
       
    }
    getTeachers() {
        this._employeeService.getEmployee()
            .subscribe(data => { this.teacherList = data });
    }
    
    getBatch() {
        this._dataService.getBatch()
            .subscribe(data => { this.batchList = data });
    }

    getCourse() {
        this._dataService.getCourse()
            .subscribe(data => { this.courseList = data });
    }

    onModalHidden() {

    }
    OnCourseSelection($event: any) {

        var courseID = this.timeTableForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x != null);
        }
    }
    SetWeekDays() {

        this.weekDayModal.show();

    }
    save() {
        if (!this.timeTableForm.valid) {
            return;
        }
        if (this.title == "Create") {



            //this._subjectAllocationService.saveSubjectAllocation(this.timeTableForm.value)
            //    .subscribe((data) => {
            //        this._router.navigate(['/timeTable']);
            //    }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/timeTable']);
    }
   
    get CourseId() { return this.timeTableForm.get('CourseId'); }
    get BatchId() { return this.timeTableForm.get('BatchId'); }
    get Name() { return this.timeTableForm.get('Name'); }
    get WeekDays() { return this.timeTableForm.get('WeekDays'); }
}
