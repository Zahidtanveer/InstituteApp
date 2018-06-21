import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReligionService } from '../../services/CasteAndReligion/service.religion'
import * as $ from 'jquery';
@Component({
    selector: 'editReligion',
    templateUrl: './EditReligion.component.html'
})
export class editReligion implements OnInit {

    religionForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _religionService: ReligionService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.religionForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            createdBy: [''],
            updatedBy: [''],
            createdDate: [''],
            updatedDate: ['']


        })
    }
    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._religionService.getReligionById(this.id)
                .subscribe(resp => this.religionForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.religionForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._religionService.updateReligion(this.religionForm.value)
                .subscribe((data) => {
                    this.refresh();
                    this._router.navigate(['/catse-and-religion']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this.refresh();
        this._router.navigate(['/catse-and-religion']);
    }
    refresh() {
        $(document).ready(function () {
            location.reload(true);
        });
    }
    get name() { return this.religionForm.get('name'); }
    get createdBy() { return this.religionForm.get('createdBy'); }
    get updatedBy() { return this.religionForm.get('updatedBy'); }
    get createdDate() { return this.religionForm.get('createdDate'); }
    get updatedDate() { return this.religionForm.get('updatedDate'); }
}
