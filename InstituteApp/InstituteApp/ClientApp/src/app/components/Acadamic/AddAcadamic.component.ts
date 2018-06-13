import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AcadamicComponent } from '../Acadamic/acadamic.component';
import { AcadamicService } from '../../services/acadamic.service'

@Component({
    selector: 'createAcadamic',
    templateUrl: './AddAcadamic.component.html'
})
export class createAcadamic implements OnInit {

    acadamicForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
   
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _acadamicService: AcadamicService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.acadamicForm = this._fb.group({
            id: 0,
            StartYear: ['', [Validators.required]],
            StartMonth: ['', [Validators.required]],
            EndYear: ['', [Validators.required]],
            EndMonth: ['', [Validators.required]],
            IsActive: ['', [Validators.required]]
           
        })
    }
    ngOnInit() {
    }
    save() {
        if (!this.acadamicForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._acadamicService.saveAcadamic(this.acadamicForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-acadamic']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/fetch-acadamic']);
    }

    get StartYear() { return this.acadamicForm.get('StartYear'); }
    get StartMonth() { return this.acadamicForm.get('StartMonth'); }
    get EndYear() { return this.acadamicForm.get('EndYear'); }
    get EndMonth() { return this.acadamicForm.get('EndMonth'); }
    get IsActive() { return this.acadamicForm.get('IsActive'); }
  



}
