import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BatchService } from '../../services/CourseAndBatch/batch.service'
import { CourseService } from '../../services/CourseAndBatch/course.service'
import * as $ from 'jquery';
@Component({
    selector: 'editBatch',
    templateUrl: './EditBatch.component.html'
})
export class editBatch implements OnInit {
    public courseList: CourseData[];
    batchForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _batchService: BatchService, private _courseService: CourseService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.batchForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            courseId: ['', [Validators.required]],
            satrtDate: ['', [Validators.required]],
            endDate: ['', [Validators.required]],
            maxNumberOfStudent: ['', [Validators.required]],
            course: [''],
            batchTeachers:['']
        })
        this.getCourses();
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._batchService.getBatchById(this.id)
                .subscribe(resp => this.batchForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    getCourses() {
        this._courseService.getCourse()
            .subscribe(data => { this.courseList = data });
    }
    save() {
        if (!this.batchForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._batchService.updateBatch(this.batchForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/Batch']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/Batch']);
    }
    get courseId() { return this.batchForm.get('courseId'); }
    get name() { return this.batchForm.get('name'); }
    get satrtDate() { return this.batchForm.get('satrtDate'); }
    get endDate() { return this.batchForm.get('endDate'); }
    get maxNumberOfStudent() { return this.batchForm.get('maxNumberOfStudent'); }
    get course() { return this.batchForm.get('course'); }
    get batchTeachers() { return this.batchForm.get('batchTeachers'); }
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
