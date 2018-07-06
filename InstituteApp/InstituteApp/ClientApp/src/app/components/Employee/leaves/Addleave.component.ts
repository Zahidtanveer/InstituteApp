
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../../services/employee/service.leave'
import { LeaveCategoryService, LeaveCategoryData } from '../../../services/employee/service.leaveCategory';
import { DataService, DesignationData } from '../../../services/data.service';

@Component({
    selector: 'createLeave',
    templateUrl: './AddLeave.component.html'
})
export class createLeave {
    public leaveCategoryList: LeaveCategoryData[];
    public designationList: DesignationData[];
    leaveForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leaveService: LeaveService, private _router: Router, private _leaveCategoryService: LeaveCategoryService, private _dataService: DataService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.leaveForm = this._fb.group({
            id: 0,
            DesignationName: ['', [Validators.required]],
            LeaveCount: ['', [Validators.required]],
            LeaveCategoryId: ['', [Validators.required]]
        })
        this.getLeaveCategory();
        this.getDesignation();
    }

    getLeaveCategory() {
        this._leaveCategoryService.getLeaveCategory()
            .subscribe(data => { this.leaveCategoryList = data });
    }
    getDesignation() {
        this._dataService.getDesignation()
            .subscribe(data => { this.designationList = data });
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
    get DesignationName() { return this.leaveForm.get('DesignationName'); }
    get LeaveCategoryId() { return this.leaveForm.get('LeaveCategoryId'); }
    get LeaveCount() { return this.leaveForm.get('LeaveCount'); }
    
}
