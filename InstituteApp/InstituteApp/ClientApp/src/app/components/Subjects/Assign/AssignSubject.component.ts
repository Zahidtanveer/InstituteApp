import { Router } from "@angular/router";
import { AssignSubjectService, AssignSubjectData } from "../../../services/subjects/AssignSubject.service";
import { AlertService, DialogType } from "../../../services/alert.service";
import { Component } from "@angular/core";

@Component({
    selector: 'fetch-Subject',
    templateUrl: './AssignSubject.component.html'
})
export class AssignSubjectComponent {


    public dList: AssignSubjectData[];
    dataTable: any;

    constructor(private _router: Router, private _assignSubjectService: AssignSubjectService, private alertService: AlertService) {

        this.getAssignSubjects();
    }

    getAssignSubjects() {
        this._assignSubjectService.getAssignSubject()
            .subscribe(data => { this.dList = data });
    }

    delete(SubjectID) {
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, DialogType.confirm, () => this.deletehelper(SubjectID));
    }

    deletehelper(SubjectID) {
        this._assignSubjectService.deleteAssignSubject(SubjectID).subscribe((data) => {
            this.getAssignSubjects();
        }, error => console.error(error))
    }



}
