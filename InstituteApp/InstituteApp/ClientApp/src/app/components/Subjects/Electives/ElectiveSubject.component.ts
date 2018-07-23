import { Router } from "@angular/router";
import { AssignSubjectService, AssignSubjectData } from "../../../services/subjects/AssignSubject.service";
import { AlertService, DialogType } from "../../../services/alert.service";
import { Component } from "@angular/core";
import { SubjectAllocationData, SubjectAllocationService } from "../../../services/subjects/SubjectAllocation.service";
import { ElectiveSubjectData, ElectiveSubjectService } from "../../../services/subjects/ElectiveSubject.service";

@Component({
    selector: 'ElectiveSubject',
    templateUrl: './ElectiveSubject.component.html'
})
export class ElectiveSubjectComponent {


    public dList: ElectiveSubjectData[];
    dataTable: any;

    constructor(private _router: Router, private _electiveSubjectService: ElectiveSubjectService, private alertService: AlertService) {

        this.getElectiveSubject();
    }

    getElectiveSubject() {
        this._electiveSubjectService.getElectiveSubject()
            .subscribe(data => { this.dList = data });

        console.log(this.dList);
    }

    delete(SubjectID) {
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, DialogType.confirm, () => this.deletehelper(SubjectID));
    }

    deletehelper(SubjectID) {
        this._electiveSubjectService.deleteElectiveSubject(SubjectID).subscribe((data) => {
            this.getElectiveSubject();
        }, error => console.error(error))
    }



}
