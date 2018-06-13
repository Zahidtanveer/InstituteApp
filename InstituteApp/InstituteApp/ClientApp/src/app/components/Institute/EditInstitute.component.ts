import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InstituteComponent } from '../Institute/Institute.componet';
import { InstituteService } from '../../services/institute.service'

@Component({
    selector: 'editInstitute',
    templateUrl: './EditInstitute.component.html'
})
export class editInstitute implements OnInit {

    instituteForm: FormGroup;
    title: string = "";
    id: number;
    errorMessage: any;
    mobnumPattern = "^((\\+91-?)|0)?[0-9]{11}$";
    pnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _instituteService: InstituteService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.instituteForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            address: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            phone: ['', [Validators.required, Validators.pattern(this.pnumPattern)]],
            mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
            fax: ['', [Validators.required, Validators.pattern(this.pnumPattern)]],
            admin: ['', [Validators.required]],
            country: ['', [Validators.required]],
            languange: ['', [Validators.required]],
            code: ['', [Validators.required]],
            timeZone: ['', [Validators.required]],
            createdBy: [''],
            updatedBy: [''],
            createdDate: [''],
            updatedDate: ['']

        })
    }
    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._instituteService.getInstituteById(this.id)
                .subscribe(resp => this.instituteForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
       if (!this.instituteForm.valid) {
            return;
        }
       if (this.title == "Edit") {
            this._instituteService.updateInstitute(this.instituteForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-institute']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/fetch-institute']);
    }

    get name() { return this.instituteForm.get('name'); }
    get address() { return this.instituteForm.get('address'); }
    get email() { return this.instituteForm.get('email'); }
    get phone() { return this.instituteForm.get('phone'); }
    get mobile() { return this.instituteForm.get('mobile'); }
    get fax() { return this.instituteForm.get('fax'); }
    get admin() { return this.instituteForm.get('admin'); }
    get country() { return this.instituteForm.get('country'); }
    get languange() { return this.instituteForm.get('languange'); }
    get code() { return this.instituteForm.get('code'); }
    get timeZone() { return this.instituteForm.get('timeZone'); }
    get createdBy() { return this.instituteForm.get('createdBy'); }
    get updatedBy() { return this.instituteForm.get('updatedBy'); }
    get createdDate() { return this.instituteForm.get('createdDate'); }
    get updatedDate() { return this.instituteForm.get('updatedDate'); }


}
