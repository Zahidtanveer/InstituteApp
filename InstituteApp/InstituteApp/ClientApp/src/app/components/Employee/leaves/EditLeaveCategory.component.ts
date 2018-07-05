
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveCategoryService } from '../../../services/employee/service.leaveCategory'
import * as $ from 'jquery';

@Component({
    selector: 'editLeaveCategory',
    templateUrl: './EditLeaveCategory.component.html'
})
export class editLeaveCategory implements OnInit {

    leaveCategoryForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leaveCategoryService: LeaveCategoryService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.leaveCategoryForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            leave:['']
        })
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._leaveCategoryService.getLeaveCategoryById(this.id)
                .subscribe(resp => this.leaveCategoryForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.leaveCategoryForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._leaveCategoryService.updateLeaveCategory(this.leaveCategoryForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/LeaveCategory']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/LeaveCategory']);
    }

    get name() { return this.leaveCategoryForm.get('name'); }
    get leave() { return this.leaveCategoryForm.get('leave'); }
}

