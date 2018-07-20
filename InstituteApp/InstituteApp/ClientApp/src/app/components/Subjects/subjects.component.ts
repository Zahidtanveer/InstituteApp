import { SubjectData, SubjectService } from "../../services/subjects/subject.service";
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { DialogType, AlertService } from "../../services/alert.service";

@Component({
    selector: 'fetch-Subject',
    templateUrl: './subjects.component.html'
})
export class SubjectComponent {


    public dList: SubjectData[];
    dataTable: any;

    constructor(private _router: Router, private _subjectService: SubjectService, private alertService: AlertService) {

        this.getSubjects();
    }

    getSubjects() {
        this._subjectService.getSubject()
            .subscribe(data => { this.dList = data });
    }

    delete(SubjectID) {
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, DialogType.confirm, () => this.deletehelper(SubjectID));
    }

    deletehelper(SubjectID) {
        this._subjectService.deleteSubject(SubjectID).subscribe((data) => {
            this.getSubjects();
        }, error => console.error(error))
    }



}
