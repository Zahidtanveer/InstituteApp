import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { DepartmentService } from '../../../services/employee/service.department'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Department',
    templateUrl: './Department.component.html'
})

export class DepartmentComponent {

    public dList: DepartmentData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _DepartmentService: DepartmentService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Department/Index').subscribe(result => {
            this.dList = result.json() as DepartmentData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getDepartments;

    }

    getDepartments() {
        this._DepartmentService.getDepartment()
            .subscribe(data => { this.dList = data });
    }

    delete(departmentID) {

        this.alertService.showDialog('Are you sure you want to delete this Department with Id:' + departmentID, DialogType.confirm, () => this.deletehelper(departmentID));

    }

    deletehelper(departmentID) {
        this._DepartmentService.deleteDepartment(departmentID).subscribe((data) => {
            this.getDepartments();
        }, error => console.error(error))
    }

}
interface DepartmentData {
    id: number;
    name: string;
    code: string;
}
