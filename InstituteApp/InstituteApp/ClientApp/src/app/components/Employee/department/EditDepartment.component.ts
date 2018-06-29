import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../services/employee/service.department'
import * as $ from 'jquery';

@Component({
    selector: 'editDepartment',
    templateUrl: './EditDepartment.component.html'
})
export class editDepartment implements OnInit {
    
    departmentForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _departmentService: DepartmentService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.departmentForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            code: ['', [Validators.required]],
          
        })
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._departmentService.getDepartmentById(this.id)
                .subscribe(resp => this.departmentForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.departmentForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._departmentService.updateDepartment(this.departmentForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/department']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/department']);
    }

    get name() { return this.departmentForm.get('name'); }
    get code() { return this.departmentForm.get('code'); }
}

