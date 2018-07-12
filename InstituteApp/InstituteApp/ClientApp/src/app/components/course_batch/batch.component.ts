import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { BatchService } from '../../services/CourseAndBatch/batch.service'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { CourseComponent } from './course.component';

@Component({
    selector: 'fetch-Batch',
    templateUrl: './batch.component.html'
})

export class BatchComponent {

    public dList: BatchData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _batchService: BatchService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Batch/Index').subscribe(result => {
            this.dList = result.json() as BatchData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
          });
        }, error => console.error(error));
        this.getBatchs;

    }

    getBatchs() {
        this._batchService.getBatch()
            .subscribe(data => { this.dList = data });
    }

    delete(batchID) {

        this.alertService.showDialog('Are you sure you want to delete this Batch with Id:' + batchID, DialogType.confirm, () => this.deletehelper(batchID));

    }

    deletehelper(batchID) {
        this._batchService.deleteBatch(batchID).subscribe((data) => {
            this.getBatchs();
        }, error => console.error(error))
    }

}
interface BatchData {
    id: number;
    name: string;
    courseId:number;
    startDate: string;
    endDate: string;
    maxNumberOfStudent: string;
   
 

}

