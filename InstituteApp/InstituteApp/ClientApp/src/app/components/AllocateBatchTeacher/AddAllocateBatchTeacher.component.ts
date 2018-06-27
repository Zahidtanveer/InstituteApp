import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AllocateBatchTeacherService } from '../../services/AllocatedBatchTeacher.service'
import { CourseService } from '../../services/CourseAndBatch/course.service'
import { BatchService } from '../../services/CourseAndBatch/batch.service'
import * as $ from 'jquery';
import { AlertService, MessageSeverity } from '../../services/alert.service';
@Component({
    selector: 'createAllocateBatchTeacher',
    templateUrl: './AddAllocateBatchTeacher.component.html'
})
export class createAllocateBatchTeacher {
    public courseList: CourseData[];
    public batchList: BatchData[];
    allocateBatchTeacherForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _allocateBatchTeacherService: AllocateBatchTeacherService, private _batchService: BatchService, private _courseService: CourseService,
        private _router: Router, private _alertService: AlertService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.allocateBatchTeacherForm = this._fb.group({
            id: 0,
            BatchId: ['', [Validators.required]],
            CourseId: ['', [Validators.required]],
            TeacherId: ['', [Validators.required]],
            
        })
        this.getCourses();
        this.getBatchs();
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
        if (this.title == "Create") {
            this._allocateBatchTeacherService.saveAllocateBatchTeacher(this.allocateBatchTeacherForm.value)
                .subscribe((data) => {
                    setTimeout(() => {
                        this._alertService.showMessage("Success", `New Entry Addedd Successfully !`, MessageSeverity.success)
                    }, 500);

                    this._router.navigate(['/batchteacherallocation']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/batchteacherallocation']);
    }
    get CourseId() { return this.allocateBatchTeacherForm.get('CourseId'); }
    get BatchId() { return this.allocateBatchTeacherForm.get('BatchId'); }
    get TeacherId() { return this.allocateBatchTeacherForm.get('TeacherId'); }

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
