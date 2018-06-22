import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { CasteService } from '../../services/CasteAndReligion/service.caste'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-caste',
    templateUrl: './caste.component.html'
})

export class CasteComponent {

    public dList: CasteData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _casteService: CasteService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Caste/Index').subscribe(result => {
            this.dList = result.json() as CasteData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getCastes;

    }

    getCastes() {
        this._casteService.getCaste()
            .subscribe(data => { this.dList = data });
    }

    delete(casteID) {

        this.alertService.showDialog('Are you sure you want to delete this Caste with Id:' + casteID, DialogType.confirm, () => this.deletehelper(casteID));

    }

    deletehelper(casteID) {
        this._casteService.deleteCaste(casteID).subscribe((data) => {
            this.getCastes();
        }, error => console.error(error))
    }

}
interface CasteData {
    id: number;
    name: string;
    createdBy: string;
    updatedBy: string;
    createdDate: string;
    updatedDate: string;

}
