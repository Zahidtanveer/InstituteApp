import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReligionService } from '../../services/CasteAndReligion/service.religion'
import { ReligionComponent } from '../caste_religion/religion.component'
import * as $ from 'jquery';
import { window } from 'rxjs/operators';
@Component({
    selector: 'createReligion',
    templateUrl: './AddReligion.component.html'
})
export class createReligion implements OnInit {

    religionForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _religionService: ReligionService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.religionForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]]
          

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
        if (this.title == "Create") {
            this._religionService.saveReligion(this.religionForm.value)
                .subscribe((data) => {

                    this.refresh();
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._religionService.updateReligion(this.religionForm.value)
                .subscribe((data) => {
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

    get Name() { return this.religionForm.get('Name'); }
}
