import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CasteService } from '../../services/CasteAndReligion/service.caste'
import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import * as $ from 'jquery';
@Component({
    selector: 'createCaste',
    templateUrl: './AddCaste.component.html'
})
export class createCaste implements OnInit {

    casteForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _casteService: CasteService, private _router: Router, private _alertService: AlertService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.casteForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]]


        })
    }
    ngOnInit() {
    }
    save() {
        if (!this.casteForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._casteService.saveCaste(this.casteForm.value)
                .subscribe((data) => {
                   
                    setTimeout(() => {
                        this._alertService.showMessage("New Entry", `Addedd Successfully !`, MessageSeverity.success)
                    }, 500);
                
                    this._router.navigate(['/catse-and-religion']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
       
        this._router.navigate(['/catse-and-religion']);
    }
   
    get Name() { return this.casteForm.get('Name'); }
}
