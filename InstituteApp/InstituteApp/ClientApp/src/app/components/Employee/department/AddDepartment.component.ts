import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../services/employee/service.department'

@Component({
    selector: 'createDepartment',
    templateUrl: './AddDepartment.component.html'
})
export class createDepartment {
  
    departmentForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _departmentService: DepartmentService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.departmentForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]],
            Code: ['', [Validators.required]],
           
        })
      
    }

  
    save() {
        if (!this.departmentForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._departmentService.saveDepartment(this.departmentForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/department']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/department']);
    }
    get Name() { return this.departmentForm.get('Name'); }
    get Code() { return this.departmentForm.get('Code'); }
  

}
