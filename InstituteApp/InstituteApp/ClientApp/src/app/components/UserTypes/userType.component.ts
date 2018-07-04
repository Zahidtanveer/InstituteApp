import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'User-Type',
    templateUrl: './userType.component.html'
})

export class UserTypeComponent {

    public dList: UserTypeData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string,private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Home/GetUserTypes').subscribe(result => {
            this.dList = result.json() as UserTypeData[];
        }, error => console.error(error));
     }

}
interface UserTypeData {
    id: number;
    name: string;
}
