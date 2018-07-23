import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SubjectAllocationService } from '../../../services/subjects/SubjectAllocation.service'
import { BatchData, CourseData, DataService, DepartmentData } from '../../../services/data.service';
import { SubjectData } from '../../../services/subjects/subject.service';
import { EmployeeService, EmployeeData } from '../../../services/employee/service.employee';
import { validateConfig } from '@angular/router/src/config';


@Component({
    selector: 'createSubjectAllocation',
    templateUrl: './AddSubjectAllocation.component.html'
})
export class createSubjectAllocation {
    public departmentList: DepartmentData[];
    public teacherList: EmployeeData[];
    public subteacherList: EmployeeData[];
    public courseList: CourseData[];
    public batchList: BatchData[];
    public subBatchList: BatchData[];
    public subjectList: SubjectData[];
    title: string = "Create";
    subjectForm: FormGroup;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _router: Router, private _dataService: DataService,
        private _subjectAllocationService: SubjectAllocationService, private _employeeService: EmployeeService) {

        this.subjectForm = this._fb.group({
            id: 0,
            DepartmentId: ['', Validators.required],
            TeacherId: ['', Validators.required], 
            CourseId: ['', [Validators.required]],
            BatchId: ['', [Validators.required]],
            SubjectId: ['', [Validators.required]]
        })
        this.getDepartment();
        this.getTeachers();
        this.getCourse();
        this.getBatch();
        this.getSubject();
    }
    getTeachers() {
        this._employeeService.getEmployee()
            .subscribe(data => { this.teacherList = data });
    }
    getDepartment() {
        this._dataService.getDepartment()
            .subscribe(data => { this.departmentList = data });
    }
    getBatch() {
        this._dataService.getBatch()
            .subscribe(data => { this.batchList = data });
    }

    getCourse() {
        this._dataService.getCourse()
            .subscribe(data => { this.courseList = data });
    }

    getSubject() {
        this._dataService.getSubject()
            .subscribe(data => { this.subjectList = data });
    }
    OnDepartmentSelection($event: any) {
        var departmentID = this.subjectForm.controls["DepartmentId"].value;
        if (departmentID) {
            var department = this.departmentList.filter(x => x.id == departmentID);
            if (department) {
                this.subteacherList = this.teacherList.filter(x => x.department == department[0].name && x != null);
                console.log(this.subteacherList);
            }
        }
    }
    OnCourseSelection($event: any) {

        var courseID = this.subjectForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x != null);
        }
    }

    save() {
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._subjectAllocationService.saveSubjectAllocation(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/subjectallocation']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/subjectallocation']);
    }
    get DepartmentId() { return this.subjectForm.get('DepartmentId'); }
    get TeacherId() { return this.subjectForm.get("TeacherId") }
    get CourseId() { return this.subjectForm.get('CourseId'); }
    get BatchId() { return this.subjectForm.get('BatchId'); }
    get SubjectId() { return this.subjectForm.get('SubjectId'); }
}
