import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentCategoryService } from '../../services/student/service.studentCategory'

@Component({
    selector: 'createStudentCategory',
    templateUrl: './AddStudentCategory.component.html'
})
export class createStudentCategory {

    studentCategoryForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _studentCategoryService: StudentCategoryService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.studentCategoryForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]]
        })

    }


    save() {
        if (!this.studentCategoryForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._studentCategoryService.saveStudentCategory(this.studentCategoryForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/studentcategory']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/studentcategory']);
    }
    get Name() { return this.studentCategoryForm.get('Name'); }

}
