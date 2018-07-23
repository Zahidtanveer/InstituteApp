import { Router } from "@angular/router";
import { AssignSubjectService, AssignSubjectData } from "../../../services/subjects/AssignSubject.service";
import { AlertService, DialogType } from "../../../services/alert.service";
import { Component } from "@angular/core";
import { SubjectAllocationData, SubjectAllocationService } from "../../../services/subjects/SubjectAllocation.service";

@Component({
    selector: 'SubjectAllocation',
    templateUrl: './SubjectAllocation.component.html'
})
export class SubjectAllocationComponent {


    public dList: SubjectAllocationData[];
    dataTable: any;

    constructor(private _router: Router, private _subjectAllocationService: SubjectAllocationService, private alertService: AlertService) {

        this.getSubjectAllocation();
    }

    getSubjectAllocation() {
        this._subjectAllocationService.getSubjectAllocation()
            .subscribe(data => { this.dList = data });

        console.log(this.dList);
    }

    delete(SubjectID) {
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, DialogType.confirm, () => this.deletehelper(SubjectID));
    }

    deletehelper(SubjectID) {
        this._subjectAllocationService.deleteSubjectAllocation(SubjectID).subscribe((data) => {
            this.getSubjectAllocation();
        }, error => console.error(error))
    }



}
