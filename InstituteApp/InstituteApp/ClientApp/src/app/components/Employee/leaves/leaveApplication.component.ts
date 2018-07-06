
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../../services/employee/service.leave'
import { LeaveCategoryService, LeaveCategoryData } from '../../../services/employee/service.leaveCategory';
import { EmployeeService, EmployeeData } from '../../../services/employee/service.employee';

@Component({
    selector: 'createLeave',
    templateUrl: './leaveApplication.component.html'
})
export class createLeaveApplication {

    public leaveCategoryList: LeaveCategoryData[];
    public employeeList: EmployeeData[];
    leaveAppForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _leaveService: LeaveService, private _router: Router, private _employeeService: EmployeeService, private _leaveCategoryService: LeaveCategoryService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.leaveAppForm = this._fb.group({
            id: 0,
            LeaveCategoryId: ['', [Validators.required]],
            EmployeeId: ['', [Validators.required]],
            FromDate: ['', [Validators.required]],
            ToDate: ['', [Validators.required]],
            Reason: ['']

        })
        this.getLeaveCategory();
        this.getEmployees();
    }
    getLeaveCategory() {
        this._leaveCategoryService.getLeaveCategory()
            .subscribe(data => { this.leaveCategoryList = data });
    }
    getEmployees() {
        this._employeeService.getEmployee()
            .subscribe(data => { this.employeeList = data });
    }

    save() {
        if (!this.leaveAppForm.valid) {
            return;
        }
        if (this.title == "Create") {
            console.log(this.EmployeeId +"/"+ this.LeaveCategoryId+"/"+  this.FromDate +"/"+ this.ToDate +"/"+ this.Reason);
            this._leaveService.saveLeave(this.leaveAppForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/leave']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/leave']);
    }
    get EmployeeId() { return this.leaveAppForm.get('EmployeeId'); }
    get LeaveCategoryId() { return this.leaveAppForm.get('LeaveCategoryId'); }
    get FromDate() { return this.leaveAppForm.get('FromDate'); }
    get ToDate() { return this.leaveAppForm.get('ToDate'); }
    get Reason() { return this.leaveAppForm.get('Reason'); }
}
