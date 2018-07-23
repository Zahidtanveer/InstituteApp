import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SubjectAllocationService } from '../../../services/subjects/SubjectAllocation.service'
import { BatchData, CourseData, DataService, DepartmentData } from '../../../services/data.service';
import { SubjectData } from '../../../services/subjects/subject.service';
import { EmployeeService, EmployeeData } from '../../../services/employee/service.employee';



@Component({
    selector: 'editSubjectAllocation',
    templateUrl: './EditSubjectAllocation.component.html'
})
export class editSubjectAllocation implements OnInit {
    public departmentList: DepartmentData[];
    public teacherList: EmployeeData[];
    public subteacherList: EmployeeData[];
    public courseList: CourseData[];
    public batchList: BatchData[];
    public subbatchList: BatchData[];
    public subjectList: SubjectData[];
    IsDepartmentSelected: boolean;
    IsCourseSelected: boolean;
    title: string = "Edit";
    subjectForm: FormGroup;
    errorMessage: any;
    id: number;
    constructor(private _fb: FormBuilder, private _router: Router, private _dataService: DataService,
        private _subjectAllocationService: SubjectAllocationService, private _employeeService: EmployeeService, private _avRoute: ActivatedRoute) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.subjectForm = this._fb.group({
            id: 0,
            departmentId: ['', Validators.required],
            teacherId: ['', Validators.required],
            courseId: ['', [Validators.required]],
            batchId: ['', [Validators.required]],
            subjectId: ['', [Validators.required]],
            department: [''],
            employee: [''],
            course: [''],
            batch: [''],
            subject: ['']
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
        var departmentID = this.subjectForm.controls["departmentId"].value;
        if (departmentID) {
            var department = this.departmentList.filter(x => x.id == departmentID);
            if (department) {
                this.subteacherList = this.teacherList.filter(x => x.department == department[0].name && x != null);
                console.log(this.subteacherList);
            }
        }
    }

    OnTeacherSelection($event: any) {
        var departmentID = this.subjectForm.controls["departmentId"].value;
        if (departmentID) {
            var department = this.departmentList.filter(x => x.id == departmentID);
            if (department) {
                this.subteacherList = this.teacherList.filter(x => x.department == department[0].name && x != null);
                this.IsDepartmentSelected = true;
            }
        }
    }
 
    OnCourseSelection($event: any) {

        var courseID = this.subjectForm.controls["courseId"].value;
        if (courseID) {
            this.subbatchList = this.batchList.filter(x => x.courseId == courseID && x != null);
        }
    }

    OnBatchSelection($event: any) {
        var courseSelectedValue = this.subjectForm.controls["courseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(x => x.courseId == courseSelectedValue && x !== null);
            this.IsCourseSelected = true;
        }
    }


    ngOnInit() {
        if (this.id > 0) {
            this._subjectAllocationService.getSubjectAllocationById(this.id)
                .subscribe(resp => this.subjectForm.setValue(resp)
                    , error => this.errorMessage = error);
        } 
    }

    save() {
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._subjectAllocationService.updateSubjectAllocation(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/subjectallocation']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/subjectallocation']);
    }

    get departmentId() { return this.subjectForm.get('departmentId'); }
    get teacherId() { return this.subjectForm.get("teacherId") }
    get courseId() { return this.subjectForm.get('courseId'); }
    get batchId() { return this.subjectForm.get('batchId'); }
    get subjectId() { return this.subjectForm.get('subjectId'); }
    get department() { return this.subjectForm.get('department'); }
    get employee() { return this.subjectForm.get("employee") }
    get course() { return this.subjectForm.get('course'); }
    get batch() { return this.subjectForm.get('batch'); }
    get subject() { return this.subjectForm.get('subject'); }
}
