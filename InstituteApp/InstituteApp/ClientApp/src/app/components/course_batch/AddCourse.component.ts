import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseComponent } from '../course_batch/course.component';
import { CourseService } from '../../services/CourseAndBatch/course.service'
@Component({
    selector: 'createCourse',
    templateUrl: './AddCourse.component.html'
})
export class createCourse implements OnInit {

    courseForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _courseService: CourseService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.courseForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]],
            Dscription: ['', [Validators.required]],
            Code: ['', [Validators.required]],
            MaxAttandencePercentage: ['', [Validators.required]],
            TotalWorkingDays: ['', [Validators.required]],
            SyllabusName: ['', [Validators.required]],
            AttendanceType: ['', [Validators.required]]
        })
    }
    ngOnInit() {

      
    }
    save() {
        if (!this.courseForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._courseService.saveCourse(this.courseForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-Course']);
                }, error => this.errorMessage = error)
        }
     
    }
    cancel() {
        this._router.navigate(['/fetch-Course']);
    }
    get Id() { return this.courseForm.get('Id'); }
    get Name() { return this.courseForm.get('Name'); }
    get Dscription() { return this.courseForm.get('Dscription'); }
    get Code() { return this.courseForm.get('Code'); }
    get MaxAttandencePercentage() { return this.courseForm.get('MaxAttandencePercentage'); }
    get TotalWorkingDays() { return this.courseForm.get('TotalWorkingDays'); }
    get SyllabusName() { return this.courseForm.get('SyllabusName'); }
    get AttendanceType() { return this.courseForm.get('AttendanceType'); }

}
