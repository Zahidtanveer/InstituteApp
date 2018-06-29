import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { DesignationService } from '../../../services/employee/service.Designation'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Designation',
    templateUrl: './Designation.component.html'
})

export class DesignationComponent {

    public dList: DesignationData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _DesignationService: DesignationService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Designation/Index').subscribe(result => {
            this.dList = result.json() as DesignationData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getDesignations;

    }

    getDesignations() {
        this._DesignationService.getDesignation()
            .subscribe(data => { this.dList = data });
    }

    delete(designationID) {

        this.alertService.showDialog('Are you sure you want to delete this Designation with Id:' + designationID, DialogType.confirm, () => this.deletehelper(designationID));

    }

    deletehelper(designationID) {
        this._DesignationService.deleteDesignation(designationID).subscribe((data) => {
            this.getDesignations();
        }, error => console.error(error))
    }

}
interface DesignationData {
    id: number;
    name: string;
}
