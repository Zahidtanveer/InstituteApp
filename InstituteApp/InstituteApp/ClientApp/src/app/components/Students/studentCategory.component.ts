import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { StudentCategoryService, StudentCategoryData } from '../../services/student/service.studentCategory'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-StudentCategory',
    templateUrl: './studentCategory.component.html'
})

export class StudentCategoryComponent {

    public dList: StudentCategoryData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _studentCategoryService: StudentCategoryService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/StudentCategory/Index').subscribe(result => {
            this.dList = result.json() as StudentCategoryData[];
            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, error => console.error(error));
        this.getStudentCategory;

    }

    getStudentCategory() {
        this._studentCategoryService.getStudentCategory()
            .subscribe(data => { this.dList = data });
    }

    delete(StudentCategoryID) {
        this.alertService.showDialog('Are you sure you want to delete this StudentCategory with Id:' + StudentCategoryID, DialogType.confirm, () => this.deletehelper(StudentCategoryID));
    }
    deletehelper(StudentCategoryID) {
        this._studentCategoryService.deleteStudentCategory(StudentCategoryID).subscribe((data) => {
            this.getStudentCategory();
        }, error => console.error(error))
    }

}

