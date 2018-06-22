import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { CourseService } from '../../services/CourseAndBatch/course.service'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-Course',
    templateUrl: './course.component.html'
})

export class CourseComponent {

    public dList: CourseData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _courseService: CourseService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Course/Index').subscribe(result => {
            this.dList = result.json() as CourseData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getCourses;

    }

    getCourses() {
        this._courseService.getCourse()
            .subscribe(data => { this.dList = data });
    }

    delete(courseID) {

        this.alertService.showDialog('Are you sure you want to delete this Course with Id:' + courseID, DialogType.confirm, () => this.deletehelper(courseID));

    }

    deletehelper(courseID) {
        this._courseService.deleteCourse(courseID).subscribe((data) => {
            this.getCourses();
        }, error => console.error(error))
    }

}
interface CourseData {
    id: number;
    name: string;
    dscription: string;
    code: string;
    maxAttandencePercentage: string
    totalWorkingDays: number
    syllabusName: string;
}
