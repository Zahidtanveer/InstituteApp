import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AllocateBatchTeacherService } from '../../services/AllocatedBatchTeacher.service'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'fetch-AllocatedBatchTeacher',
    templateUrl: './AllocateBatchTeacher.component.html'
})

export class AllocatedBatchTeacherComponent {

    public dList: AllocatedBatchTeacherData[];
    errorMessage: any;
    dataTable: any;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, private _allocatedBatchTeacherService: AllocateBatchTeacherService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/AllocateBatchTeacher/Index').subscribe(result => {
            this.dList = result.json() as AllocatedBatchTeacherData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getAllocatedBatchTeachers;

    }

    getAllocatedBatchTeachers() {
        this._allocatedBatchTeacherService.getAllocateBatchTeacher()
            .subscribe(data => { this.dList = data });
    }

    delete(allocatedBatchTeacherID) {

        this.alertService.showDialog('Are you sure you want to delete this AllocatedBatchTeacher with Id:' + allocatedBatchTeacherID, DialogType.confirm, () => this.deletehelper(allocatedBatchTeacherID));

    }

    deletehelper(allocatedBatchTeacherID) {
        this._allocatedBatchTeacherService.deleteAllocateBatchTeacher(allocatedBatchTeacherID).subscribe((data) => {
            this.getAllocatedBatchTeachers();
        }, error => console.error(error))
    }

}
interface AllocatedBatchTeacherData {
    id: number;
    CourseId: number;
    BatchId: number;
    TeacherId: number;
}
