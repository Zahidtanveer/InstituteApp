import { Component, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AcadamicService } from '../../services/acadamic.service'

@Component({
    selector: 'fetch-acadamic',
    templateUrl: './acadamic.component.html'
})

export class AcadamicComponent {

    public dList:AcadamicData[];
    errorMessage: any;
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _acadamicService: AcadamicService, private alertService: AlertService) {
        http.get(baseUrl + 'api/Acadamic/Index').subscribe(result => {
            this.dList = result.json() as AcadamicData[];
        }, error => console.error(error));
        this.getInstitutes;
    }

    getInstitutes() {
        this._acadamicService.getAcadamic()
            .subscribe(data => { this.dList = data });
    }

    delete(acadamicID) {

        //this.alertService.showDialog('Are you sure you want to delete this Institute with Id:' + instituteID, DialogType.confirm, () => this.deletehelper(instituteID));
        var ans = confirm("Do you want to delete Institute with Id: " + acadamicID);
        if (ans) {
            this._acadamicService.deleteAcadamic(acadamicID).subscribe((data) => {
                this.getInstitutes();
            }, error => console.error(error))
        }
    }

    deletehelper(acadamicID) {
        this._acadamicService.deleteAcadamic(acadamicID).subscribe((data) => {
            this.getInstitutes();
        }, error => console.error(error))
    }

}
interface AcadamicData {
    id: number;
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
    isActive: boolean;

}