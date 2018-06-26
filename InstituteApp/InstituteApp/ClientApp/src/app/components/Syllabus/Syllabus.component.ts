import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { SyllabusService } from '../../services/Syllabus.service'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Syllabus',
    templateUrl: './Syllabus.component.html'
})

export class SyllabusComponent {

    public dList: SyllabusData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _syllabusService: SyllabusService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Syllabus/Index').subscribe(result => {
            this.dList = result.json() as SyllabusData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getSyllabuss;

    }

    getSyllabuss() {
        this._syllabusService.getSyllabus()
            .subscribe(data => { this.dList = data });
    }

    delete(syllabusID) {

        this.alertService.showDialog('Are you sure you want to delete this Syllabus with Id:' + syllabusID, DialogType.confirm, () => this.deletehelper(syllabusID));

    }

    deletehelper(syllabusID) {
        this._syllabusService.deleteSyllabus(syllabusID).subscribe((data) => {
            this.getSyllabuss();
        }, error => console.error(error))
    }

}
interface SyllabusData {
    id: number;
    name: string;
    code: string;
    description: string;
 
}
