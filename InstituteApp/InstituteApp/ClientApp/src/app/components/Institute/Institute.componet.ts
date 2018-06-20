
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers ,Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { InstituteService } from '../../services/institute.service'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetchinstitute',
    templateUrl: './Institute.component.html'
})

export class InstituteComponent {

    public dList: InstituteData[];
    errorMessage: any;
    dataTable: any;
    
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _instituteService: InstituteService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Institute/Index').subscribe(result => {
            this.dList = result.json() as InstituteData[];

            this.chRef.detectChanges();

            const table: any = $('table');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false
            });
           
        }, error => console.error(error));
        this.getInstitutes;
       
    }

    getInstitutes() {
        this._instituteService.getInstitute()
            .subscribe(data => { this.dList = data});
    }
    
    delete(instituteID) {

       this.alertService.showDialog('Are you sure you want to delete this Institute with Id:' + instituteID, DialogType.confirm, () => this.deletehelper(instituteID));
        //var ans = confirm("Do you want to delete Institute with Id: " + instituteID);
        //if (ans) {
        //this._instituteService.deleteInstitute(instituteID).subscribe((data) => {
        //    this.getInstitutes();
        //}, error => console.error(error))
        //}
    }
    
    deletehelper(instituteID) {
        this._instituteService.deleteInstitute(instituteID).subscribe((data) => {
            this.getInstitutes();
        }, error => console.error(error))
    }
   
}
interface InstituteData {
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    mobile: string;
    fax: string;
    admin: string;
    country: string;
    languange: string;
    code: string;
    timeZone: string;
    createdBy: string;
    updatedBy: string;
    createdDate: string;
    updatedDate: string;

}
