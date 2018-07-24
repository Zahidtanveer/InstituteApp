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
    daysList: any;
    periodList=[];
    title: string = "Create";
    timeTableForm: FormGroup;
    errorMessage: any;
    DayName: string = "";
    newList = [];
    periodId: number;
    SlotId: number;
    @ViewChild('periodModal')
    periodModal: ModalDirective;

    @ViewChild('weekDayModal')
    weekDayModal: ModalDirective;

    @ViewChild('selectFacultyModal')
    selectFacultyModal: ModalDirective;

    constructor(private _fb: FormBuilder, private _router: Router,
        private _dataService: DataService, private _employeeService: EmployeeService) {

        this.timeTableForm = this._fb.group({
            id: 0,
            CourseId: ['', [Validators.required]],
            BatchId: ['', [Validators.required]],
            Name: ['', [Validators.required]],
            WeekDays: ['', [Validators.required]]
        })

        this.periodId = 1;
        this.getTeachers();
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

    //On Course Selection 
    OnCourseSelection($event: any) {

        var courseID = this.timeTableForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x != null);
        }
    }
    //Select and set Week Days
    SetWeekDays() {
        this.weekDayModal.show();
    }
    //Show Period Model PopUp
    ShowPeriodModel(day) {
        this.DayName = day;
        this.periodModal.show();
        if (this.newList) {

            this.newList = this.periodList.filter(x => x.day == day && x != null);
            console.log(this.newList);
        }

    }
    //Add New Period
    AddPeriod() {
        

        var name = (<HTMLInputElement>document.getElementById('Name')).value;
        
        var startTime = (<HTMLInputElement>document.getElementById('StartTime')).value;

        var endTime = (<HTMLInputElement>document.getElementById('EndTime')).value;
        var teacher = (<HTMLInputElement>document.getElementById('Teacher')).value;
        var day = this.DayName;
        var ID = this.periodId;
        this.newList.push({
            ID,
            day,
            name,
            startTime,
            endTime,
            teacher
        })
        this.periodId++;
        
        console.log(this.newList);
    }
    // Generate Time Table
    CreateTimeTable() {
        this.periodList = this.periodList.concat(this.newList);
        console.log(this.periodList);
    }

    save() {
        console.log("Save Btn is Clicked");
        this.weekDayModal.hide();
        var list=[];       
        $('input[type="checkbox"]:checked').each(function () {
            console.log(this.id);
            list.push(this.id);
        });
        this.daysList = list;
     
        if (!this.timeTableForm.valid) {
            return;
        }
        if (this.title == "Create") {


            console.log("Create");
            //this._subjectAllocationService.saveSubjectAllocation(this.timeTableForm.value)
            //    .subscribe((data) => {
            //        this._router.navigate(['/timeTable']);
            //    }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/timeTable']);
    }
    onFacultyModel(id) {
        this.SlotId = id;
        this.selectFacultyModal.show()
    }
    AssignFaculty() {
        var filterPeriodList = this.periodList.filter(x => x.ID == this.SlotId);
        console.log(filterPeriodList);
        console.log(filterPeriodList[0].ID);
        var id=filterPeriodList[0].ID;
        if (id) {
            var teacherCode = (<HTMLInputElement>document.getElementById('Teacher')).value;
            this.periodList[id].teacher = teacherCode;
            (<HTMLInputElement>document.getElementById('Teacher')).value = "";
            
        }
    }
    onDaysModalHidden() {

    }
    onPeriodModalHidden() {

    }
    onFacultyModalHidden() {

    }

    get CourseId() { return this.timeTableForm.get('CourseId'); }
    get BatchId() { return this.timeTableForm.get('BatchId'); }
    get Name() { return this.timeTableForm.get('Name'); }
    get WeekDays() { return this.timeTableForm.get('WeekDays'); }
}
