import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BatchService } from '../../services/CourseAndBatch/batch.service'
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { CourseService } from '../../services/CourseAndBatch/course.service'
import { BootstrapDatepickerDirective } from "../../directives/bootstrap-datepicker.directive";
import * as $ from 'jquery';
import { start } from 'repl';


@Component({
    selector: 'createBatch',
    templateUrl: './AddBatch.component.html'
})
export class createBatch {
    public courseList: CourseData[];
    batchForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    numPattern = /^\d+$/;
    @ViewChild("datepicker")
    datepicker: BootstrapDatepickerDirective;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _batchService: BatchService, private _router: Router, private _courseService: CourseService, private _alertService: AlertService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
         

        }
        this.batchForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]],
            CourseId: ['', [Validators.required]],
            SatrtDate: ['', [Validators.required]],
            EndDate: ['', [Validators.required]],
            MaxNumberOfStudent: ['', [Validators.required, Validators.pattern(this.numPattern)]]


        })
        this.getCourses();

    }
 
    getCourses() {
        this._courseService.getCourse()
            .subscribe(data => { this.courseList = data });
    }
    save() {
        if (!this.batchForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._batchService.saveBatch(this.batchForm.value)
                .subscribe((data) => {

                    setTimeout(() => {
                        this._alertService.showMessage("Success", `New Entry Addedd Successfully !`, MessageSeverity.success)
                    }, 500);

                    this._router.navigate(['/batch']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/batch']);
    }

  
    get CourseId() { return this.batchForm.get('CourseId'); }
    get Name() { return this.batchForm.get('Name'); }
    get SatrtDate() { return this.batchForm.get('SatrtDate'); }
    get EndDate() { return this.batchForm.get('EndDate'); }
    get MaxNumberOfStudent() { return this.batchForm.get('MaxNumberOfStudent'); }

  
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
