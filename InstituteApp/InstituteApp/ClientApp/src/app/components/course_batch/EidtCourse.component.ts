import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/CourseAndBatch/course.service'
import * as $ from 'jquery';
import { SyllabusService } from '../../services/Syllabus.service';
@Component({
    selector: 'editCourse',
    templateUrl: './EditCourse.component.html'
})
export class editCourse implements OnInit {
    public syllabusList: SyllabusData[]
    courseForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _syllabusService: SyllabusService, private _avRoute: ActivatedRoute,
        private _courseService: CourseService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.courseForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            dscription: ['', [Validators.required]],
            code: ['', [Validators.required]],
            maxAttandencePercentage: ['', [Validators.required]],
            totalWorkingDays: ['', [Validators.required]],
            syllabusName: ['', [Validators.required]],
            attendanceType: ['', [Validators.required]],
            batches: [''],
            syllabus: [''],
            batchTeacher:['']
        })
        this.getSyllabuss();
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._courseService.getCourseById(this.id)
                .subscribe(resp => this.courseForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    getSyllabuss() {
        this._syllabusService.getSyllabus()
            .subscribe(data => { this.syllabusList = data });
    }
    save() {
        if (!this.courseForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._courseService.updateCourse(this.courseForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/course']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/course']);
    }

    get name() { return this.courseForm.get('name'); }
    get dscription() { return this.courseForm.get('dscription'); }
    get code() { return this.courseForm.get('code'); }
    get maxAttandencePercentage() { return this.courseForm.get('maxAttandencePercentage'); }
    get totalWorkingDays() { return this.courseForm.get('totalWorkingDays'); }
    get syllabusName() { return this.courseForm.get('syllabusName'); }
    get attendanceType() { return this.courseForm.get('attendanceType'); }
    get batches() { return this.courseForm.get('batches'); }
    get syllabus() { return this.courseForm.get('syllabus'); }
    get batchTeacher() { return this.courseForm.get('batchTeacher'); }
}
interface SyllabusData {
    id: number;
    name: string;
    code: string;
    description: string;

}
