import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { LeaveCategoryService, LeaveCategoryData } from '../../../services/employee/service.leaveCategory'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-LeaveCategory',
    templateUrl: './leaveCategory.component.html'
})

export class LeaveCategoryComponent {

    public dList: LeaveCategoryData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _leaveCategoryService: LeaveCategoryService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/LeaveCategory/Index').subscribe(result => {
            this.dList = result.json() as LeaveCategoryData[];
            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, error => console.error(error));
        this.getLeaveCategory;

    }

    getLeaveCategory() {
        this._leaveCategoryService.getLeaveCategory()
            .subscribe(data => { this.dList = data });
    }

    delete(leaveCategoryID) {
        this.alertService.showDialog('Are you sure you want to delete this LeaveCategory with Id:' + leaveCategoryID, DialogType.confirm, () => this.deletehelper(leaveCategoryID));
    }
    deletehelper(leaveCategoryID) {
        this._leaveCategoryService.deleteLeaveCategory(leaveCategoryID).subscribe((data) => {
            this.getLeaveCategory();
        }, error => console.error(error))
    }

}

