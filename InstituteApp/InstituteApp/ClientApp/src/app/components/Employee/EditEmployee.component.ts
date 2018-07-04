import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee/service.employee'
import { DataService, CountryData, StateData, UserTypeData, DepartmentData, DesignationData } from '../../services/data.service'

@Component({
    selector: 'EditEmployee',
    templateUrl: './EditEmployee.component.html'
})
export class editEmployee implements OnInit {

    public countryList: CountryData[];
    public stateList: StateData[];
    public subStateList: StateData[];
    public userTypes: UserTypeData[];
    public departmentList: DepartmentData[];
    public designationList: DesignationData[];
    employeeForm: FormGroup;
    title: string = "Edit";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _dataService: DataService, private _router: Router) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.employeeForm = this._fb.group({
            id: 0,
            employeeCode: [''],
            joiningDate: [''],
            qualification: [''],
            department: [''],
            designation: [''],
            totalExperience: [''],

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

        this.getDepartment();
        this.getDesignation();
        this.getUserTypes();
        this.getState();
        this.getCountry();
     

    }
    ngOnInit() {

        if (this.id > 0) {
            this._employeeService.getEmployeeById(this.id)
                .subscribe(resp => this.employeeForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    
    }
   
    getCountry() {
        this._dataService.getCountries()
            .subscribe(data => { this.countryList = data });
    }

    getState() {
        this._dataService.getStates()
            .subscribe(data => { this.stateList = data });
    }

    getUserTypes() {
        this._dataService.getUserTypes()
            .subscribe(data => { this.userTypes = data });
    }
    getDepartment() {
        this._dataService.getDepartment()
            .subscribe(data => { this.departmentList = data });
    }
    getDesignation() {
        this._dataService.getDesignation()
            .subscribe(data => { this.designationList = data });
    }
    OnCountrySelection($event: any) {
        this.BindStates();
    }
    BindStates() {
        var countryID = this.employeeForm.controls["contactDetails_Country"].value;
        console.log(countryID);
        console.log(this.stateList);
        this.subStateList = this.stateList.filter(x => x.countryId == countryID && x !== null);
    }
    save() {
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/employee']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/employee']);
    }
   
    get employeeCode() { return this.employeeForm.get('EmployeeCode'); }
    get joiningDate() { return this.employeeForm.get('JoiningDate'); }
    get qualification() { return this.employeeForm.get('Qualification'); }
    get department() { return this.employeeForm.get('Department'); }
    get designation() { return this.employeeForm.get('Designation'); }
    get totalExperience() { return this.employeeForm.get('TotalExperience'); }

    get personalDetails_FirstName() { return this.employeeForm.get('personalDetails_FirstName'); }
    get personalDetails_MiddleName() { return this.employeeForm.get('personalDetails_MiddleName'); }
    get personalDetails_LastName() { return this.employeeForm.get('personalDetails_LastName'); }
    get personalDetails_DateOfBirth() { return this.employeeForm.get(' personalDetails_DateOfBirth'); }
    get personalDetails_Gender() { return this.employeeForm.get('personalDetails_Gender'); }
    get personalDetails_CNIC() { return this.employeeForm.get('personalDetails_CNIC'); }

    get contactDetails_PresentAddress() { return this.employeeForm.get('contactDetails_PresentAddress'); }
    get contactDetails_PermanentAddress() { return this.employeeForm.get('contactDetails_PermanentAddress'); }
    get contactDetails_City() { return this.employeeForm.get('contactDetails_City'); }
    get contactDetails_PostalCode() { return this.employeeForm.get('contactDetails_PostalCode'); }
    get contactDetails_Country() { return this.employeeForm.get('contactDetails_Country'); }
    get contactDetails_State() { return this.employeeForm.get('contactDetails_State'); }
    get contactDetails_Phone() { return this.employeeForm.get('contactDetails_Phone'); }
    get contactDetails_Mobile() { return this.employeeForm.get('contactDetails_Mobile'); }
    get contactDetails_Email() { return this.employeeForm.get('contactDetails_Email'); }

}
