import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignationService } from '../../../services/employee/service.designation'
import * as $ from 'jquery';

@Component({
    selector: 'editDesignation',
    templateUrl: './EditDesignation.component.html'
})
export class editDesignation implements OnInit {

    designationForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _designationService: DesignationService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.designationForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]]
         })
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._designationService.getDesignationById(this.id)
                .subscribe(resp => this.designationForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.designationForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._designationService.updateDesignation(this.designationForm.value)
                .subscribe((data) => {

                    this._router.navigate(['/designation']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {

        this._router.navigate(['/designation']);
    }

    get name() { return this.designationForm.get('name'); }
}

