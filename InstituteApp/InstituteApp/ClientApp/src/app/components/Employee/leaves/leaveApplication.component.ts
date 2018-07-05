
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../../services/employee/service.leave'
import { LeaveCategoryService, LeaveCategoryData } from '../../../services/employee/service.leaveCategory';

@Component({
    selector: 'createLeave',
    templateUrl: './leaveApplication.component.html'
})
export class createLeaveApplication {
    public leaveCategoryList: LeaveCategoryData[];
    leaveApplicationForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leaveService: LeaveService, private _router: Router, private _leaveCategoryService: LeaveCategoryService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.leaveApplicationForm = this._fb.group({
            id: 0,
            LeaveCategoryId: ['', [Validators.required]],
            FromDate: ['', [Validators.required]],
            ToDate: ['', [Validators.required]],
            Reason: ['']

        })
        this.getLeaveCategory();
    }
    getLeaveCategory() {
        this._leaveCategoryService.getLeaveCategory()
            .subscribe(data => { this.leaveCategoryList = data });
    }

    save() {
        if (!this.leaveApplicationForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._leaveService.saveLeave(this.leaveApplicationForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/leave']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/leave']);
    }

    get LeaveCategoryId() { return this.leaveApplicationForm.get('LeaveCategoryId'); }
    get FromDate() { return this.leaveApplicationForm.get('FromDate'); }
    get ToDate() { return this.leaveApplicationForm.get('ToDate'); }
    get Reason() { return this.leaveApplicationForm.get('Reason'); }
}
