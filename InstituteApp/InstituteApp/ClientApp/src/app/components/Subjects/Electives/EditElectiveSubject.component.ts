import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { BatchData, CourseData, DataService, DepartmentData } from '../../../services/data.service';
import { SubjectData } from '../../../services/subjects/subject.service';
import { ElectiveSubjectService } from '../../../services/subjects/ElectiveSubject.service';
import { StudentService, StudentData } from '../../../services/student/service.student';


@Component({
    selector: 'editElectiveSubject',
    templateUrl: './EditElectiveSubject.component.html'
})
export class editElectiveSubject implements OnInit {

    public courseList: CourseData[];
    public batchList: BatchData[];
    public subbatchList: BatchData[];
    public subjectList: SubjectData[];
    public studentList: StudentData[];
    IsCourseSelected: boolean;
    title: string = "Edit";
    subjectForm: FormGroup;
    errorMessage: any;
    id: number;
    constructor(private _fb: FormBuilder, private _router: Router, private _dataService: DataService,
        private _electiveSubjectService: ElectiveSubjectService, private _studentService: StudentService, private _avRoute: ActivatedRoute) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.subjectForm = this._fb.group({
            id: 0,
            courseId: ['', [Validators.required]],
            batchId: ['', [Validators.required]],
            subjectId: ['', [Validators.required]],
            studentId: ['', Validators.required],
            course: [''],
            batch: [''],
            subject: [''],
            student: [''],
        })


        this.getCourse();
        this.getBatch();
        this.getSubject();
        this.getStudent();
    }
    getStudent() {
        this._studentService.getStudent()
            .subscribe(data => { this.studentList = data });
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
            this._electiveSubjectService.getElectiveSubjectById(this.id)
                .subscribe(resp => this.subjectForm.setValue(resp)
                    , error => this.errorMessage = error);
        } 
    }
    save() {
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._electiveSubjectService.updateElectiveSubject(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/electivesubject']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/electivesubject']);
    }


    get courseId() { return this.subjectForm.get('courseId'); }
    get batchId() { return this.subjectForm.get('batchId'); }
    get subjectId() { return this.subjectForm.get('subjectId'); }
    get studentId() { return this.subjectForm.get("studentId") }
    get course() { return this.subjectForm.get('course'); }
    get batch() { return this.subjectForm.get('batch'); }
    get subject() { return this.subjectForm.get('subject'); }
    get student() { return this.subjectForm.get("student") }
}
