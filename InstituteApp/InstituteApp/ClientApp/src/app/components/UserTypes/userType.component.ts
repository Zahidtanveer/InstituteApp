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
            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
               });
        }, error => console.error(error));
     }

}
interface UserTypeData {
    id: number;
    name: string;
}
