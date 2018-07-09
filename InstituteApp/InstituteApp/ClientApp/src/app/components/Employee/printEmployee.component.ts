import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { EmployeeService, EmployeeData } from '../../services/employee/service.employee'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-buttons'
import { DepartmentData, DesignationData, DataService } from '../../services/data.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';


@Component({
    selector: 'print-Employee',
    templateUrl: './printEmployee.component.html'
})

export class PrintEmployeeComponent {

    public departmentList: DepartmentData[];
    public designationList: DesignationData[];
    public dList: EmployeeData[];
    errorMessage: any;
    dataTable: any;
    employeeForm: FormGroup;
    public IsDepartmentWise: boolean;
    public IsDesignationWise: boolean;

    constructor(private _fb: FormBuilder,http: Http, @Inject('BASE_URL') baseUrl: string, private _dataService: DataService, private _employeeService: EmployeeService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        this.employeeForm = this._fb.group({
            IsDepOrDes: [''],
            Department: [''],
            Designation: ['']
            })
        //this.getEmployees;
        this.getDepartment();
        this.getDesignation();


    }
    getDepartment() {
        this._dataService.getDepartment()
            .subscribe(data => { this.departmentList = data });
    }
    getDesignation() {
        this._dataService.getDesignation()
            .subscribe(data => { this.designationList = data });
    }
    getEmployees() {
        this._employeeService.getEmployee()
            .subscribe(data => { this.dList = data });
    }
    OnSelectValue($event: any) {
        var SelectedValue = this.employeeForm.controls["IsDepOrDes"].value;
        console.log(SelectedValue);
        if (SelectedValue == "DepartmentWise") {
            this.IsDepartmentWise = true;
            this.IsDesignationWise = false;
        }
        else if (SelectedValue == "DesignationWise") {
            this.IsDesignationWise = true;
            this.IsDepartmentWise = false;
        }
    }
    OnDepartmentSelection($event:any) {
        var depSelectedValue = this.employeeForm.controls["Department"].value;
        this._employeeService.filterEmployee(depSelectedValue,'',0).subscribe((data) => {
            this.dList = data;
            }, error => console.error(error))
    }
    OnDesignationSelection($event:any) {
        var desSelectedValue = this.employeeForm.controls["Designation"].value;
        this._employeeService.filterEmployee('', desSelectedValue, 0).subscribe((data) => {
            this.dList = data;
            
        }, error => console.error(error))
    }
    print() {
             this.chRef.detectChanges();
        const table: any = $('#dttable');
        this.dataTable = table.DataTable({
            paging: false,
            dom: 'Bfrtip',
            buttons: [
                'print'
            ]
        });
    }
    get IsDepOrDes() { return this.employeeForm.get('IsDepOrDes'); }
    get Department() { return this.employeeForm.get('Department'); }
    get Designation() { return this.employeeForm.get('Designation'); }
}

