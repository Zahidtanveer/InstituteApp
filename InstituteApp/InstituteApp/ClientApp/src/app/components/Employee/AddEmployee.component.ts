import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee/service.employee'

@Component({
    selector: 'createEmployee',
    templateUrl: './AddEmployee.component.html'
})
export class createEmployee implements OnInit {

    employeeForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.employeeForm = this._fb.group({
            id: 0,

            EmployeeCode: [''],
            JoiningDate: [''],
            Qualification: [''],
            Department: [''],
            Designation: [''],
            TotalExperience: [''],

            personalDetails_FirstName: [''],
            personalDetails_MiddleName: [''],
            personalDetails_LastName: [''],
            personalDetails_DateOfBirth: [''],
            personalDetails_Gender: [''],
            personalDetails_CNIC: [''],
            personalDetails_EmployeeId: [''],

            contactDetails_PresentAddress: [''],
            contactDetails_PermanentAddress: [''],
            contactDetails_City: [''],
            contactDetails_PostalCode: [''],
            contactDetails_Country: [''],
            contactDetails_State: [''],
            contactDetails_Phone: [''],
            contactDetails_Mobile: [''],
            contactDetails_Email: ['']



        })
    }
    ngOnInit() {
    }
    save() {
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/employee']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/employee']);
    }

    get EmployeeCode() { return this.employeeForm.get('EmployeeCode'); }
    get JoiningDate() { return this.employeeForm.get('JoiningDate'); }
    get Qualification() { return this.employeeForm.get('Qualification'); }
    get Department() { return this.employeeForm.get('Department'); }
    get Designation() { return this.employeeForm.get('Designation'); }
    get TotalExperience() { return this.employeeForm.get('TotalExperience'); }
    get personalDetails_FirstName() { return this.employeeForm.get('personalDetails_FirstName'); }
    get personalDetails_MiddleName() { return this.employeeForm.get('personalDetails_MiddleName'); }
    get personalDetails_LastName() { return this.employeeForm.get('personalDetails_LastName'); }
    get personalDetails_DateOfBirth() { return this.employeeForm.get(' personalDetails_DateOfBirth'); }
    get personalDetails_Gender() { return this.employeeForm.get('personalDetails_Gender'); }
    get personalDetails_CNIC() { return this.employeeForm.get('personalDetails_CNIC'); }
    get personalDetails_EmployeeId() { return this.employeeForm.get('personalDetails_EmployeeId'); }
    get contactDetails_PresentAddress() { return this.employeeForm.get('contactDetails_PresentAddress'); }
    get contactDetails_PermanentAddress() { return this.employeeForm.get('contactDetails_PermanentAddress'); }
    get contactDetails_City() { return this.employeeForm.get('contactDetails_City'); }
    get contactDetails_PostalCode() { return this.employeeForm.get('contactDetails_PostalCode'); }
    get contactDetails_Country() { return this.employeeForm.get('contactDetails_Country'); }
    get contactDetails_State() { return this.employeeForm.get('contactDetails_State'); }
    get contactDetails_Phone() { return this.employeeForm.get('contactDetails_Phone'); }
    get contactDetails_Mobile() { return this.employeeForm.get('contactDetails_Mobile'); }
    get contactDetails_Email() { return this.employeeForm.get('contactDetails_Email'); }
    get contactDetails_EmployeeId() { return this.employeeForm.get('contactDetails_EmployeeId'); }

}
