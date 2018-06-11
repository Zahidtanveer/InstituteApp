import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InstituteComponent } from '../Institute/Institute.componet';  
import { InstituteService } from '../../services/institute.service'

@Component({
    selector: 'createInstitute',
    templateUrl: './AddInstitute.component.html'
})
export class createInstitute implements OnInit {

    instituteForm: FormGroup;
    title: string = "Create";
    Id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _instituteService: InstituteService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.Id = this._avRoute.snapshot.params["Id"];
        }
        this.instituteForm = this._fb.group({
            Id: 0,
            Name: ['', [Validators.required]],
            Address: ['', [Validators.required]],
            Email: ['', [Validators.required]],
            Phone: ['', [Validators.required]],
            Mobile: ['', [Validators.required]],
            Fax: ['', [Validators.required]],
            Admin: ['', [Validators.required]],
            Country: ['', [Validators.required]],
            Languange: ['', [Validators.required]],
            Code: ['', [Validators.required]],
            TimeZone: ['', [Validators.required]],
        })
    }  
    ngOnInit() {
        if (this.Id > 0) {
            this.title = "Edit";
            this._instituteService.getInstituteById(this.Id)
                .subscribe(resp => this.instituteForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.instituteForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._instituteService.saveInstitute(this.instituteForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-institute']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._instituteService.updateInstitute(this.instituteForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-institute']);
                }, error => this.errorMessage = error)
        }
    }  
    cancel() {
        this._router.navigate(['/fetch-institute']);
    }
    
    get Name() { return this.instituteForm.get('Name'); }
    get Address() { return this.instituteForm.get('Address'); }
    get Email() { return this.instituteForm.get('Email'); }
    get Phone() { return this.instituteForm.get('Phone'); }
    get Mobile() { return this.instituteForm.get('Mobile'); }
    get Fax() { return this.instituteForm.get('Fax'); }
    get Admin() { return this.instituteForm.get('Admin'); }
    get Country() { return this.instituteForm.get('Country'); }
    get Languange() { return this.instituteForm.get('Languange'); }
    get Code() { return this.instituteForm.get('Code'); }
    get TimeZone() { return this.instituteForm.get('TimeZone'); }
    

}
