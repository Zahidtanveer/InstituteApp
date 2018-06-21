import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CasteService } from '../../services/CasteAndReligion/service.caste'
import * as $ from 'jquery';
@Component({
    selector: 'editCaste',
    templateUrl: './EditCaste.component.html'
})
export class editCaste implements OnInit {

    casteForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _casteService: CasteService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.casteForm = this._fb.group({
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
            this._casteService.getCasteById(this.id)
                .subscribe(resp => this.casteForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.casteForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._casteService.updateCaste(this.casteForm.value)
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
    get name() { return this.casteForm.get('name'); }
    get createdBy() { return this.casteForm.get('createdBy'); }
    get updatedBy() { return this.casteForm.get('updatedBy'); }
    get createdDate() { return this.casteForm.get('createdDate'); }
    get updatedDate() { return this.casteForm.get('updatedDate'); }
}
