import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CountryData, StateData, DataService, ReligionData, CasteData, BatchData, CourseData } from '../../services/data.service';
import { StudentService } from '../../services/student/service.student';


@Component({
    selector: 'editStudent',
    templateUrl: './EditStudent.component.html'
})
export class editStudent {

    public countryList: CountryData[];
    public stateList: StateData[];
    public csubStateList: StateData[];
    public gsubStateList: StateData[];
    public casteList: CasteData[];
    public religionList: ReligionData[];
    public batchList: BatchData[];
    public courseList: CourseData[];
    title: "Edit"
    studentForm: FormGroup;
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _router: Router, private _studentService: StudentService, private _dataService: DataService) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.studentForm = this._fb.group({
            id: 0,
            //Official Detail
            acadamicYear: ['', [Validators.required]],
            registerNumber: [''],
            joiningDate: [''],
            course: [''],
            batch: [''],
            rollNo: [''],

            personalDetails_FirstName: [''],
            personalDetails_MiddleName: [''],
            personalDetails_LastName: [''],
            personalDetails_DateOfBirth: [''],
            personalDetails_Gender: [''],
            personalDetails_CNIC: [''],
            personalDetails_MotherTongue: [''],
            personalDetails_Category: [''],
            personalDetails_BirthPlace: [''],
            personalDetails_Nationality: [''],
            personalDetails_BloodGroup: [''],
            personalDetails_Religion: [''],
            personalDetails_Caste: [''],


            contactDetails_PresentAddress: [''],
            contactDetails_PermanentAddress: [''],
            contactDetails_City: [''],
            contactDetails_PostalCode: [''],
            contactDetails_Country: [''],
            contactDetails_State: [''],
            contactDetails_Phone: [''],
            contactDetails_Mobile: [''],
            contactDetails_Email: [''],

            fatherName: [''],
            fatherJob: [''],
            fatherMobile: [''],
            fatherCNIC: [''],

            motherName: [''],
            motherJob: [''],
            motherMobile: [''],
            motherCNIC: [''],

            g_Name: ['', [Validators.required]],
            g_Relation: [''],
            g_Education: [''],
            g_Occuption: ['', [Validators.required]],
            g_Income: [''],
            g_contactDetails_Address: [''],
            g_contactDetails_City: [''],
            g_contactDetails_PostalCode: [''],
            g_contactDetails_Country: [''],
            g_contactDetails_State: [''],
            g_contactDetails_Phone: [''],
            g_contactDetails_Mobile: [''],
            g_contactDetails_Email: [''],

            schoolName: [''],
            schoolAddress: [''],
            qualification: ['']


        })

        //Bind DropDownLists
        this.getState();
        this.getCountry();
        this.getCaste();
        this.getReligion();
        this.getBatch();
        this.getCourse();
    }
    ngOnInit() {

        if (this.id > 0) {
            this._studentService.getStudentById(this.id)
                .subscribe(resp => this.studentForm.setValue(resp)
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
    getCaste() {
        this._dataService.getCaste()
            .subscribe(data => { this.casteList = data });
    }
    getReligion() {
        this._dataService.getReligion()
            .subscribe(data => { this.religionList = data });
    }
    getBatch() {
        this._dataService.getBatch()
            .subscribe(data => { this.batchList = data });
    }
    getCourse() {
        this._dataService.getCourse()
            .subscribe(data => { this.courseList = data });
    }
    OnCountrySelectionc($event: any) {
        var countryID = this.studentForm.controls["contactDetails_Country"].value;
        this.csubStateList = this.stateList.filter(x => x.countryId == countryID && x !== null);
    }
    OnCountrySelectiong($event: any) {
        var countryID = this.studentForm.controls["g_contactDetails_Country"].value;
        console.log(countryID);
        this.gsubStateList = this.stateList.filter(x => x.countryId == countryID && x !== null);
    }



    save() {

        if (!this.studentForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._studentService.updateStudent(this.studentForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/students']);
                }, error => this.errorMessage = error)
        }

    }
    cancel() {
        this._router.navigate(['/students']);
    }





    //Official Detail
    get acadamicYear() { return this.studentForm.get('acadamicYear'); }
    get registerNumber() { return this.studentForm.get('registerNumber'); }
    get joiningDate() { return this.studentForm.get('joiningDate'); }
    get course() { return this.studentForm.get('course'); }
    get batch() { return this.studentForm.get('batch'); }
    get rollNo() { return this.studentForm.get('rollNo'); }

    get personalDetails_FirstName() { return this.studentForm.get('personalDetails_FirstName'); }
    get personalDetails_MiddleName() { return this.studentForm.get('personalDetails_MiddleName'); }
    get personalDetails_LastName() { return this.studentForm.get('personalDetails_LastName'); }
    get personalDetails_DateOfBirth() { return this.studentForm.get('personalDetails_DateOfBirth'); }
    get personalDetails_Gender() { return this.studentForm.get('personalDetails_Gender'); }
    get personalDetails_CNIC() { return this.studentForm.get('personalDetails_CNIC'); }
    get personalDetails_Category() { return this.studentForm.get('personalDetails_Category'); }
    get personalDetails_BirthPlace() { return this.studentForm.get('personalDetails_BirthPlace'); }
    get personalDetails_Nationality() { return this.studentForm.get('personalDetails_Nationality'); }
    get personalDetails_BloodGroup() { return this.studentForm.get('personalDetails_BloodGroup'); }
    get personalDetails_Religion() { return this.studentForm.get('personalDetails_Religion'); }
    get personalDetails_Caste() { return this.studentForm.get('personalDetails_Caste'); }
    get personalDetails_MotherTongue() { return this.studentForm.get('personalDetails_MotherTongue'); }


    get contactDetails_PresentAddress() { return this.studentForm.get('contactDetails_PresentAddress'); }
    get contactDetails_PermanentAddress() { return this.studentForm.get('contactDetails_PermanentAddress'); }
    get contactDetails_City() { return this.studentForm.get('contactDetails_City'); }
    get contactDetails_PostalCode() { return this.studentForm.get('contactDetails_PostalCode'); }
    get contactDetails_Country() { return this.studentForm.get('contactDetails_Country'); }
    get contactDetails_State() { return this.studentForm.get('contactDetails_State'); }
    get contactDetails_Phone() { return this.studentForm.get('contactDetails_Phone'); }
    get contactDetails_Mobile() { return this.studentForm.get('contactDetails_Mobile'); }
    get contactDetails_Email() { return this.studentForm.get('contactDetails_Email'); }

    get fatherName() { return this.studentForm.get('fatherName'); }
    get fatherJob() { return this.studentForm.get('fatherJob'); }
    get fatherMobile() { return this.studentForm.get('fatherMobile'); }
    get fatherCNIC() { return this.studentForm.get('fatherCNIC'); }

    get motherName() { return this.studentForm.get('motherName'); }
    get motherJob() { return this.studentForm.get('motherJob'); }
    get motherMobile() { return this.studentForm.get('motherMobile'); }
    get motherCNIC() { return this.studentForm.get('motherCNIC'); }

    get g_Name() { return this.studentForm.get('g_Name'); }
    get g_Relation() { return this.studentForm.get('g_Relation'); }
    get g_Education() { return this.studentForm.get('g_Education'); }
    get g_Income() { return this.studentForm.get('g_Income'); }
    get g_Occuption() { return this.studentForm.get('g_Occuption'); }
    get g_contactDetails_Address() { return this.studentForm.get('g_contactDetails_Address'); }
    get g_contactDetails_City() { return this.studentForm.get('g_contactDetails_City'); }
    get g_contactDetails_PostalCode() { return this.studentForm.get('g_contactDetails_PostalCode'); }
    get g_contactDetails_Country() { return this.studentForm.get('g_contactDetails_Country'); }
    get g_contactDetails_State() { return this.studentForm.get('g_contactDetails_State'); }
    get g_contactDetails_Phone() { return this.studentForm.get('g_contactDetails_Phone'); }
    get g_contactDetails_Mobile() { return this.studentForm.get('g_contactDetails_Mobile'); }
    get g_contactDetails_Email() { return this.studentForm.get('g_contactDetails_Email'); }

    get schoolName() { return this.studentForm.get('schoolName'); }
    get schoolAddress() { return this.studentForm.get('schoolAddress'); }
    get qualification() { return this.studentForm.get('qualification'); }


}
