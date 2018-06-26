import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AllocateBatchTeacherService } from '../../services/AllocatedBatchTeacher.service'
import { CourseService } from '../../services/CourseAndBatch/course.service'
import { BatchService } from '../../services/CourseAndBatch/batch.service'
import * as $ from 'jquery';
import { AlertService } from '../../services/alert.service';
@Component({
    selector: 'createAllocateBatchTeacher',
    templateUrl: './AddAllocateBatchTeacher.component.html'
})
export class createAllocateBatchTeacher implements OnInit {
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
            batchId: ['', [Validators.required]],
            courseId: ['', [Validators.required]],
            teacherId: ['', [Validators.required]],
            course: ['']
        })
        this.getCourses();
        this.getBatchs();
    }
    ngOnInit() {

      
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
        if (this.title == "create") {
            this._allocateBatchTeacherService.saveAllocateBatchTeacher(this.allocateBatchTeacherForm.value)
                .subscribe((data) => {
                    setTimeout(() => {
                        this._alertService.showMessage("Success", `New Entry Addedd Successfully !`, MessageSeverity.success)
                    }, 500);

                    this._router.navigate(['/fetch-AllocateBatchTeacher']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/fetch-AllocateBatchTeacher']);
    }
    get courseId() { return this.allocateBatchTeacherForm.get('courseId'); }
    get batchId() { return this.allocateBatchTeacherForm.get('batchId'); }
    get teacherId() { return this.allocateBatchTeacherForm.get('teacherId'); }

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
