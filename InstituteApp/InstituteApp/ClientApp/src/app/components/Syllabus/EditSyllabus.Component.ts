import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SyllabusService } from '../../services/Syllabus.service'
import * as $ from 'jquery';

@Component({
    selector: 'editSyllabus',
    templateUrl: './EditSyllabus.component.html'
})
export class editSyllabus implements OnInit {

    syllabusForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _syllabusService: SyllabusService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.syllabusForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            description: ['', [Validators.required]],
            code: ['', [Validators.required]],
            courses: ['']
           
        })
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._syllabusService.getSyllabusById(this.id)
                .subscribe(resp => this.syllabusForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.syllabusForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._syllabusService.updateSyllabus(this.syllabusForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/Syllabus']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/Syllabus']);
    }

    get name() { return this.syllabusForm.get('name'); }
    get description() { return this.syllabusForm.get('description'); }
    get code() { return this.syllabusForm.get('code'); }
    get courses() { return this.syllabusForm.get('courses'); }
}
