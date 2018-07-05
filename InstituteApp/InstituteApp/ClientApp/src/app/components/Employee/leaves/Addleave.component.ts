
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../../services/employee/service.leave'

@Component({
    selector: 'createLeave',
    templateUrl: './AddLeave.component.html'
})
export class createLeave {

    leaveForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leaveService: LeaveService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.leaveForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]]
        })

    }


    save() {
        if (!this.leaveForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._leaveService.saveLeave(this.leaveForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/leave']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/leave']);
    }
    get Name() { return this.leaveForm.get('Name'); }
    get DesignationName() { return this.leaveForm.get('DesignationName'); }
    get LeaveType() { return this.leaveForm.get('LeaveType'); }
    get LeaveCount() { return this.leaveForm.get('LeaveCount'); }
}
