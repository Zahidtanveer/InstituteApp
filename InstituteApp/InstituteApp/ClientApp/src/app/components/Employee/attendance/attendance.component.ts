import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { EmployeeAttendanceService, EmployeeAttendanceData, UpdateAttendance } from '../../../services/employee/service.attendance'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DepartmentData, DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'fetch-EmployeeAttendance',
    templateUrl: './attendance.component.html'
})

export class EmployeeAttendanceComponent {
    public departmentList: DepartmentData[];
    public dList: EmployeeAttendanceData[];
    public updateList: UpdateAttendance[];
    employeeForm: FormGroup;
    errorMessage: any;
    IsDepartmentSelected: boolean = false;
    dataTable: any;

    constructor(private _fb: FormBuilder,private _router: Router,private _employeeAttendanceService: EmployeeAttendanceService,
        private alertService: AlertService, private chRef: ChangeDetectorRef,private _dataService: DataService) {
        this.employeeForm = this._fb.group({
            Department: [''],
            Date: ['']
        })
        this.getDepartment();
     }


    getDepartment() {
        this._dataService.getDepartment()
            .subscribe(data => { this.departmentList = data });
    }
    OnDepartmentSelection($event: any) {
        this.IsDepartmentSelected = true;
        var date = this.employeeForm.controls["Date"].value;
        if (date) {
            this.RefreshTable();
            this.getData();
        }
    }
    OnDateChange($event: any) {
       
        this.RefreshTable();
        this.getData();
        $('.checkAll').prop('checked', false);
    }

   
    getData() {
        var department = this.employeeForm.controls["Department"].value;
        var date = this.employeeForm.controls["Date"].value;
        if (department && date) {
            this.getEmployeeAttendances(department, date);
        }
    }
    getEmployeeAttendances(department, date) {
        this._employeeAttendanceService.getEmployeeAttendance(department, date)
            .subscribe(data => {
            this.dList = data
                this.ApplyDataTable();
            });
    }


    SaveData() {
        var dictAttendance = [];
       // General/modular function for status logging
        var checkboxChecker = function () {
            $('table tr').each(function (i) {
                // Only check rows that contain a checkbox
                var $chkbox = $(this).find('.isPresent');
                if ($chkbox.length) {
                    var status = $chkbox.prop('checked');
                    console.log('Table row ' + i + ' contains a checkbox with a checked status of: ' + status);
                    var tRowId = this.closest('tr').children.item(0).innerHTML;
                    dictAttendance.push({
                        key: tRowId,
                        value: status
                    });

                }
            });
        };
        // Check checkboxes status on DOMready
        checkboxChecker();
        console.log(dictAttendance);
        this.updateList = dictAttendance;
        console.log("Assign....");
        console.log(this.updateList);
        //Post Data
        if (this.updateList) {
            this.MarkEmployeeAttendances(this.updateList);
            $('.checkAll').prop('checked', false);
        }
    }
    //Check or Uncheck all row
    CheckAll() {

        $(".checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
        });

    }

    ApplyDataTable() {

        this.chRef.detectChanges();
        const table: any = $('#dttable');
        this.dataTable = table.DataTable({
            "paging": false,
            "ordering": false,
            "searching": false,
            "bInfo": false
        });
    }

    RefreshTable() {
        const table: any = $('#dttable');
        table.DataTable().destroy();
    }
    //Mark Attendance Method
    MarkEmployeeAttendances(employeeData) {
        this._employeeAttendanceService.saveEmployeeAttendance(employeeData)
            .subscribe(data => {
                this._router.navigate(['/employeeattendace']
                );
            });
    }

    get Date() { return this.employeeForm.get('Date'); }
    get Department() { return this.employeeForm.get('Department'); }
}

