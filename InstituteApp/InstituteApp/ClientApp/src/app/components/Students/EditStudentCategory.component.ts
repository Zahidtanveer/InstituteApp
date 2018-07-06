
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentCategoryService } from '../../services/student/service.studentCategory'
import * as $ from 'jquery';

@Component({
    selector: 'editStudentCategory',
    templateUrl: './EditStudentCategory.component.html'
})
export class editStudentCategory implements OnInit {

    studentCategoryForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _studentCategoryService: StudentCategoryService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.studentCategoryForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            students: ['']
        })
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._studentCategoryService.getStudentCategoryById(this.id)
                .subscribe(resp => this.studentCategoryForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.studentCategoryForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._studentCategoryService.updateStudentCategory(this.studentCategoryForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/studentcategory']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/studentcategory']);
    }

    get name() { return this.studentCategoryForm.get('name'); }
    get students() { return this.studentCategoryForm.get('students'); }
}

