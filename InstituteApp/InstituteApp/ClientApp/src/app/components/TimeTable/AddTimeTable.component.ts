import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SubjectAllocationService } from '../../services/subjects/SubjectAllocation.service'
import { BatchData, CourseData, DataService, DepartmentData, SubjectData } from '../../services/data.service';
import { EmployeeService, EmployeeData } from '../../services/employee/service.employee';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TimeTableService, TimeTableData } from '../../services/timetable/timetable.service';
import { Subject } from 'rxjs';


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
    public subjectList: SubjectData[];
    public timeTableData: TimeTableData[];
    timeTableForm: FormGroup;
    errorMessage: any;
    daysList: any;
    periodList = [];
    newList = [];
    DayName: string = "";
    title: string = "Create";
    periodId: number;
    SlotId: number;

    @ViewChild('periodModal')
    periodModal: ModalDirective;

    @ViewChild('weekDayModal')
    weekDayModal: ModalDirective;

    @ViewChild('selectFacultyModal')
    selectFacultyModal: ModalDirective;

    constructor(private _fb: FormBuilder, private _router: Router,
        private _dataService: DataService, private _timeTableService:TimeTableService, private _employeeService: EmployeeService) {

        this.timeTableForm = this._fb.group({
            id: 0,
            CourseId: ['', [Validators.required]],
            BatchId: ['', [Validators.required]],
            Name: ['', [Validators.required]]
          
        })
        this.periodId = 1;
        this.getTeachers();
        this.getCourse();
        this.getBatch();
        this.getSubjects();

    }

    //Subject Data Binding with DropDown
    getSubjects() {
        this._dataService.getSubject()
            .subscribe(data => { this.subjectList = data });
    }

    //Teachers Data Binding with DropDown
    getTeachers() {
        this._employeeService.getEmployee()
            .subscribe(data => { this.teacherList = data });
    }

    //Batch Data Binding with DropDown
    getBatch() {
        this._dataService.getBatch()
            .subscribe(data => { this.batchList = data });
    }

    //Course Data Binding with DropDown
    getCourse() {
        this._dataService.getCourse()
            .subscribe(data => { this.courseList = data });
    }

    //On Course Selection Change 
    OnCourseSelection($event: any) {

        var courseID = this.timeTableForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x != null);
        }
    }

    //Generate Time Table
    CreateTimeTable() {
        function removeDuplicateUsingFilter(arr) {
            let unique_array = arr.filter(function (elem, index, self) {
                return index == self.indexOf(elem);
            });
            return unique_array
        }
        this.periodList = this.periodList.concat(this.newList);
        this.periodList = removeDuplicateUsingFilter(this.periodList);
        console.log(this.periodList);
    }

    //Select and set Week Days
    SetWeekDays() {
        this.weekDayModal.show();
    }
   //Add Days to TimeTable
    saveWeekDays() {
        this.weekDayModal.hide();
        var list = [];
        $('input[type="checkbox"]:checked').each(function () {
            list.push(this.id);
        });
        this.daysList = list;
    }
  
    //Show Period Model PopUp
    ShowPeriodModel(day) {
        this.DayName = day;
        this.periodModal.show();
        if (this.newList) {
         this.newList = this.periodList.filter(x => x.Day == day && x != null);
        }

    }
    //Add New Period
    AddPeriod() {

        var Id = this.periodId;
        var Day = this.DayName;
        var s = (<HTMLSelectElement>document.getElementById('SubjectName'));
        var SubjectId = s.options[s.selectedIndex].value;
        var SubjectName = s.options[s.selectedIndex].text;
        var StartTime = (<HTMLInputElement>document.getElementById('StartTime')).value;
        var EndTime = (<HTMLInputElement>document.getElementById('EndTime')).value;
        var TeacherId = '0';
        var TeacherName = '';
        var CourseId = '';
        var BatchId = '';
        var Name = '';
        if (SubjectName == 'Break') SubjectId = '0';
        this.newList.push({
            Id,
            Day,
            SubjectId,
            SubjectName,
            StartTime,
            EndTime,
            TeacherId,
            TeacherName,
            CourseId,
            BatchId,
            Name
        })
        this.periodId++;


    }
    //Remove Period 
    remove(id) {
        var index = id - 1;
        console.log(index)
        if (index > -1) {
            this.periodList.splice(index, 1);
            this.newList.splice(index, 1);
            this.ReOrder();
         }
        
    }

    //Show Assign Faculty Model PopUp
    onFacultyModel(id) {
        this.SlotId = id;
        this.selectFacultyModal.show()
    }
    //Assign Faculty on Submit
    AssignFaculty() {
        var index = this.SlotId - 1;
        if (index > -1) {
            var e = (<HTMLSelectElement>document.getElementById('Teacher'));
            this.periodList[index].TeacherId = e.options[e.selectedIndex].value;
            this.periodList[index].TeacherName = e.options[e.selectedIndex].text;
            e.selectedIndex = 0;
            this.selectFacultyModal.hide();
        }

       console.log(this.periodList);
    }

    //Save TimeTable To DataBase
    SaveToDataBase() {
        if (!this.timeTableForm.valid) {
            return;
        }
        if (this.title == "Create") {

            var Course = this.timeTableForm.controls["CourseId"].value;
            var Batch = this.timeTableForm.controls["BatchId"].value;
            var Name = this.timeTableForm.controls["Name"].value;
            for (var i = 0; i < this.periodList.length; i++) {
                this.periodList[i].CourseId = Course;
                this.periodList[i].BatchId = Batch;
                this.periodList[i].Name = Name;
            }
            this.timeTableData = this.periodList;
            console.log(this.timeTableData);
            this._timeTableService.saveTimeTable(this.timeTableData)
                .subscribe((data) => {
                    this._router.navigate(['/timeTable']);
                }, error => this.errorMessage = error)
        }
    }

    //ReArrange Lists
    ReOrder() {
        var j = 1;
        for (var i = 0; i < this.newList.length; i++) {
            this.newList[i].Id = j;
            j++;
        }
        var l = 1;
        for (var i = 0; i < this.periodList.length; i++) {
            this.periodList[i].Id = l;
            l++;
        }
     }

    cancel() {
        this._router.navigate(['/timeTable']);
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
   
}
