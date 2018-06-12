
import { Component, Inject } from '@angular/core';
import { Http, Headers ,Response} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { InstituteService } from '../../services/institute.service'

@Component({
    selector: 'fetchinstitute',
    templateUrl: './Institute.component.html'
})

export class InstituteComponent {

    public dList: InstituteData[];
    errorMessage: any;
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string,private _instituteService: InstituteService) {
        http.get(baseUrl + 'api/Institute/Index').subscribe(result => {
            this.dList = result.json() as InstituteData[];
        }, error => console.error(error));
        this.getInstitutes;
    }

    getInstitutes() {
        this._instituteService.getInstitute()
            .subscribe(data => { this.dList = data});
    }

    delete(instituteID) {
        var ans = confirm("Do you want to delete Institute with Id: " + instituteID);
        if (ans) {
            this._instituteService.deleteInstitute(instituteID).subscribe((data) => {
                this.getInstitutes();
            }, error => console.error(error))
        }
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
