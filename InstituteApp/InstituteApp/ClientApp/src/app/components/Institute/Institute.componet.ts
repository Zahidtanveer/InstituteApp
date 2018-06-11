
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

    constructor(public http: Http, private _router: Router, private _instituteService: InstituteService) {
        this.getInstitutes;
    }
   
    getInstitutes() {
        this._instituteService.getInstitute()
            .catch(this.errorHandler)
            .subscribe(data => { this.dList = data },
                error => this.errorMessage = error);
    }

    //delete(instituteID) {
    //    var ans = confirm("Do you want to delete customer with Id: " + instituteID);
    //    if (ans) {
    //        this._instituteService.deleteInstitute(instituteID).subscribe((data) => {
    //            this.getInstitutes();
    //        }, error => console.error(error))
    //    }
    //}
    errorHandler(error: Response) {
    console.log(error);
        return Observable.throw(error);
    }
}
interface InstituteData {
    Id: number;
    Name: string;
    Address: string;
    Email: string;
    Phone: string;
    Mobile: string;
    Fax: string;
    Admin: string;
    Country: string;
    Languange: string;
    Code: string;
    TimeZone: string;
    CreatedBy: string;
    UpdatedBy: string;
    CreatedDate: string;
    UpdateDate: string;

}
