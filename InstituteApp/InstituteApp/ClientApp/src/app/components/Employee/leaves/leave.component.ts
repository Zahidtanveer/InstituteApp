import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { LeaveService, LeaveData } from '../../../services/employee/service.leave'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Leave',
    templateUrl: './leave.component.html'
})

export class LeaveComponent {

    public dList: LeaveData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _LeaveService: LeaveService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Leave/Index').subscribe(result => {
            this.dList = result.json() as LeaveData[];
            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, error => console.error(error));
        this.getLeaves;

    }

    getLeaves() {
        this._LeaveService.getLeave()
            .subscribe(data => { this.dList = data });
    }

    delete(leaveID) {
        this.alertService.showDialog('Are you sure you want to delete this Leave with Id:' + leaveID, DialogType.confirm, () => this.deletehelper(leaveID));
    }
    deletehelper(leaveID) {
        this._LeaveService.deleteLeave(leaveID).subscribe((data) => {
            this.getLeaves();
        }, error => console.error(error))
    }

}

