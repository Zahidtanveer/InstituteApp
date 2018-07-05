
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveCategoryService } from '../../../services/employee/service.leaveCategory'

@Component({
    selector: 'createLeaveCategory',
    templateUrl: './AddLeaveCategory.component.html'
})
export class createLeaveCategory {

    leaveCategoryForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leaveCategoryService: LeaveCategoryService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.leaveCategoryForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]]
        })

    }


    save() {
        if (!this.leaveCategoryForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._leaveCategoryService.saveLeaveCategory(this.leaveCategoryForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/leavecategory']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/leavecategory']);
    }
    get Name() { return this.leaveCategoryForm.get('Name'); }

}
