import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AcadamicComponent } from '../Acadamic/acadamic.component';
import { AcadamicService } from '../../services/acadamic.service'

@Component({
    selector: 'editAcadamic',
    templateUrl: './EditAcadamic.component.html'
})
export class editAcadamic implements OnInit {

    acadamicForm: FormGroup;
    title: string = "";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _acadamicService: AcadamicService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.acadamicForm = this._fb.group({
            id: 0,
            startYear: ['', [Validators.required]],
            startMonth: ['', [Validators.required]],
            endYear: ['', [Validators.required]],
            endMonth: ['', [Validators.required]],
            isActive: ['', [Validators.required]],
            createdBy: [''],
            updatedBy: [''],
            createdDate: [''],
            updatedDate: ['']

        })
    }
    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._acadamicService.getAcadamicById(this.id)
                .subscribe(resp => this.acadamicForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.acadamicForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._acadamicService.updateAcadamic(this.acadamicForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/acadamic']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/acadamic']);
    }

    get startYear() { return this.acadamicForm.get('startYear'); }
    get startMonth() { return this.acadamicForm.get('startMonth'); }
    get endYear() { return this.acadamicForm.get('endYear'); }
    get endMonth() { return this.acadamicForm.get('endMonth'); }
    get isActive() { return this.acadamicForm.get('isActive'); }
    get createdBy() { return this.acadamicForm.get('createdBy'); }
    get updatedBy() { return this.acadamicForm.get('updatedBy'); }
    get createdDate() { return this.acadamicForm.get('createdDate'); }
    get updatedDate() { return this.acadamicForm.get('updatedDate'); }


}
