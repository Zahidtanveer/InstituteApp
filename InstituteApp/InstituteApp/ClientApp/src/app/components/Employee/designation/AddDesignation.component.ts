
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignationService } from '../../../services/employee/service.designation'

@Component({
    selector: 'createDesignation',
    templateUrl: './AddDesignation.component.html'
})
export class createDesignation {

    designationForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _designationService: DesignationService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.designationForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]]
        })

    }


    save() {
        if (!this.designationForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._designationService.saveDesignation(this.designationForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/designation']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/designation']);
    }
    get Name() { return this.designationForm.get('Name'); }
 
}
