import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AssignSubjectService } from '../../../services/subjects/AssignSubject.service'
import { BatchData, CourseData, DataService } from '../../../services/data.service';
import { SubjectData } from '../../../services/subjects/subject.service';


@Component({
    selector: 'editAssignSubject',
    templateUrl: './EditAssign.component.html'
})
export class editAssignSubject implements OnInit {
    public batchList: BatchData[];
    public courseList: CourseData[];
    public subbatchList: BatchData[];
    public subjectList: SubjectData[];
    IsCourseSelected: boolean;
    title: string = "Edit";
    subjectForm: FormGroup;
    errorMessage: any;
    id: number;
    constructor(private _fb: FormBuilder, private _router: Router, private _dataService: DataService, private _assignSubjectService: AssignSubjectService, private _avRoute: ActivatedRoute) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.subjectForm = this._fb.group({
            id: 0,
            courseId: ['', [Validators.required]],
            batchId: ['', [Validators.required]],
            subjectId: ['', [Validators.required]],
            course: [''],
            batch: [''],
            subject: ['']
        })
        this.getCourse();
        this.getBatch();
        this.getSubject();
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
            this._assignSubjectService.getAssignSubjectById(this.id)
                .subscribe(resp => this.subjectForm.setValue(resp)
                    , error => this.errorMessage = error);
        } 
    }
    save() {
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._assignSubjectService.updateAssignSubject(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/assginsubject']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/assginsubject']);
    }
    
    get courseId() { return this.subjectForm.get('courseId'); }
    get course() { return this.subjectForm.get('course'); }
    get batch(){ return this.subjectForm.get('batch'); }
    get batchId() { return this.subjectForm.get('batchId'); }
    get subject() { return this.subjectForm.get('subject'); }
    get subjectId() { return this.subjectForm.get('subjectId'); }
}
