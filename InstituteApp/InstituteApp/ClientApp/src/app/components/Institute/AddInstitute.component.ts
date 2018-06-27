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
            Name: ['', [Validators.required]],
            Address: ['', [Validators.required]],
            Email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            Phone: ['', [Validators.required, Validators.pattern(this.pnumPattern)]],
            Mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
            Fax: ['', [Validators.required, Validators.pattern(this.pnumPattern)]],
            Admin: ['', [Validators.required]],
            Country: ['', [Validators.required]],
            Languange: ['', [Validators.required]],
            Code: ['', [Validators.required]],
            TimeZone: ['', [Validators.required]]
       

        })
    }  
    ngOnInit() {
   }
    save() {
        if (!this.instituteForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._instituteService.saveInstitute(this.instituteForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/institute']);
                }, error => this.errorMessage = error)
        }
       
    }  
    cancel() {
        this._router.navigate(['/institute']);
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
