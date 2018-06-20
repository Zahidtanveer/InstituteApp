
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { ReligionService } from '../../services/CasteAndReligion/service.religion'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-religion',
    templateUrl: './religion.component.html'
})

export class ReligionComponent {

    public dList: ReligionData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _religionService: ReligionService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Religion/Index').subscribe(result => {
            this.dList = result.json() as ReligionData[];

            this.chRef.detectChanges();

            const table: any = $('table');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false
            });

        }, error => console.error(error));
        this.getReligions;

    }

    getReligions() {
        this._religionService.getReligion()
            .subscribe(data => { this.dList = data });
    }

    delete(religionID) {

        this.alertService.showDialog('Are you sure you want to delete this Religion with Id:' + religionID, DialogType.confirm, () => this.deletehelper(religionID));
       
    }

    deletehelper(religionID) {
        this._religionService.deleteReligion(religionID).subscribe((data) => {
            this.getReligions();
        }, error => console.error(error))
    }

}
interface ReligionData {
    id: number;
    name: string;
    createdBy: string;
    updatedBy: string;
    createdDate: string;
    updatedDate: string;

}
