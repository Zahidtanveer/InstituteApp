import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, MessageSeverity, DialogType } from '../../../services/alert.service';
import { StudentService, StudentData, UpdateRollNo } from '../../../services/student/service.student'
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
    selector: 'Student-UpdateRollNo',
    templateUrl: './UpdateRollNo.component.html'
})

export class UpdateRollNoComponent {
    public updateList: UpdateRollNo[];
    public dList: StudentData[];
    errorMessage: any;
    dataTable: any;

    constructor(private _router: Router,http: Http, @Inject('BASE_URL') baseUrl: string, private _studentService: StudentService, private alertService: AlertService, private chRef: ChangeDetectorRef) {
        http.get(baseUrl + 'api/Student/Index').subscribe(result => {
            this.dList = result.json() as StudentData[];

            this.chRef.detectChanges();
            const table: any = $('#dttable');
            this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",



            });
        }, error => console.error(error));
        this.getStudents;

    }



    getStudents() {
        this._studentService.getStudent()
            .subscribe(data => { this.dList = data });
    }
    SaveData() {
        
        var dictRollNo = [];
        $('table tr input[type=text]').each(function () {
            var str = $(this).val();
            var tRowId = this.closest('tr').children.item(0).innerHTML;
            dictRollNo.push({
                id: tRowId,
                rollNo: str
            });
            
        });
        this.updateList = dictRollNo;
        console.log(this.updateList);
        this.UpdateRollNo(this.updateList);

    }
    UpdateRollNo(studentData) {

        this._studentService.UpdateStudentRollNo(studentData)
                .subscribe(data => {
                    this._router.navigate(['/student-rollno']
                    );
                });
    }

}
