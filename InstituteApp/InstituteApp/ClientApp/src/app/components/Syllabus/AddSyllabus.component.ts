import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SyllabusService } from '../../services/Syllabus.service'
import * as $ from 'jquery';

@Component({
    selector: 'createSyllabus',
    templateUrl: './AddSyllabus.component.html'
})
export class createSyllabus{

    syllabusForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _syllabusService: SyllabusService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.syllabusForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]],
            Description: ['', [Validators.required]],
            Code: ['', [Validators.required]],

        })
    }
    
    save() {
        if (!this.syllabusForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._syllabusService.saveSyllabus(this.syllabusForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/Syllabus']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/Syllabus']);
    }

    get Name() { return this.syllabusForm.get('Name'); }
    get Description() { return this.syllabusForm.get('Description'); }
    get Code() { return this.syllabusForm.get('Code'); }
}
