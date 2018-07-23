import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AssignSubjectService } from '../../../services/subjects/AssignSubject.service'
import { BatchData, CourseData, DataService } from '../../../services/data.service';
import { SubjectData } from '../../../services/subjects/subject.service';


@Component({
    selector: 'createAssignSubject',
    templateUrl: './AddAssign.component.html'
})
export class createAssignSubject {
    public batchList: BatchData[];
    public courseList: CourseData[];
    public subBatchList: BatchData[];
    public subjectList: SubjectData[];

    title: string = "Create";
    subjectForm: FormGroup;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _router: Router, private _dataService: DataService, private _assignSubjectService: AssignSubjectService) {

        this.subjectForm = this._fb.group({
            id: 0,
            CourseId: ['', [Validators.required]],
            BatchId: ['', [Validators.required]],
            SubjectId: ['', [Validators.required]],
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
            this._assignSubjectService.saveAssignSubject(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/assginsubject']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/assginsubject']);
    }

    get CourseId() { return this.subjectForm.get('CourseId'); }
    get BatchId() { return this.subjectForm.get('BatchId'); }
    get SubjectId() { return this.subjectForm.get('SubjectId'); }
}
