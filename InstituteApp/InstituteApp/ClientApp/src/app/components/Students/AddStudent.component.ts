import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CountryData, StateData, DataService, ReligionData, CasteData, BatchData, CourseData } from '../../services/data.service';
import { StudentService } from '../../services/student/service.student';


@Component({
    selector: 'createStudent',
    templateUrl: './AddStudent.component.html'
})
export class createStudent {

    public countryList: CountryData[];
    public stateList: StateData[];
    public csubStateList: StateData[];
    public gsubStateList: StateData[];
    public casteList: CasteData[];
    public religionList: ReligionData[];
    public batchList: BatchData[];
    public courseList: CourseData[];
    title:"Create"
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
            AcadamicYear: ['', [Validators.required]],
            RegisterNumber: [''],
            JoiningDate: [''],
            Course: [''],
            Batch: [''],
            RollNo: [''],
         
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
            personalDetails_Caste:[''],

       
            contactDetails_PresentAddress: [''],
            contactDetails_PermanentAddress: [''],
            contactDetails_City: [''],
            contactDetails_PostalCode: [''],
            contactDetails_Country: [''],
            contactDetails_State: [''],
            contactDetails_Phone: [''],
            contactDetails_Mobile: [''],
            contactDetails_Email: [''],

            FatherName: [''],
            FatherJob: [''],
            FatherMobile: [''],
            FatherCNIC: [''],
        
            MotherName: [''],
            MotherJob: [''],
            MotherMobile: [''],
            MotherCNIC: [''],
        
            g_Name: ['',[Validators.required]],
            g_Relation:[''],
            g_Education: [''],
            g_Occuption: ['',[Validators.required]],
            g_Income: [''],
            g_contactDetails_Address: [''],
            g_contactDetails_City: [''],
            g_contactDetails_PostalCode: [''],
            g_contactDetails_Country: [''],
            g_contactDetails_State: [''],
            g_contactDetails_Phone: [''],
            g_contactDetails_Mobile: [''],
            g_contactDetails_Email: [''],
		
            SchoolName: [''],
            SchoolAddress: [''],
            Qualification: ['']


        })

        //Bind DropDownLists
        this.getState();
        this.getCountry();
        this.getCaste();
        this.getReligion();
        this.getBatch();
        this.getCourse();
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
        if (this.title == "Create") {
        }
        this._studentService.saveStudent(this.studentForm.value)
            .subscribe((data) => {
                this._router.navigate(['/students']);
            }, error => this.errorMessage = error)
       

    }
    cancel() {
        this._router.navigate(['/students']);
    }





    //Official Detail
    get AcadamicYear() { return this.studentForm.get('AcadamicYear'); }
    get RegisterNumber() { return this.studentForm.get('RegisterNumber'); }
    get JoiningDate() { return this.studentForm.get('JoiningDate'); }
    get Course() { return this.studentForm.get('Course'); }
    get Batch() { return this.studentForm.get('Batch'); }
    get RollNo() { return this.studentForm.get('RollNo'); }

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

    get FatherName() { return this.studentForm.get('FatherName'); }
    get FatherJob() { return this.studentForm.get('FatherJob'); }
    get FatherMobile() { return this.studentForm.get('FatherMobile'); }
    get FatherCNIC() { return this.studentForm.get('FatherCNIC'); }

    get MotherName() { return this.studentForm.get('MotherName'); }
    get MotherJob() { return this.studentForm.get('MotherJob'); }
    get MotherMobile() { return this.studentForm.get('MotherMobile'); }
    get MotherCNIC() { return this.studentForm.get('MotherCNIC'); }

    get g_Name() { return this.studentForm.get('g_Name'); }
    get g_Relation() { return this.studentForm.get('g_Relation'); }
    get g_Education(){ return this.studentForm.get('g_Education'); }
    get g_Income(){ return this.studentForm.get('g_Income'); }
    get g_Occuption() { return this.studentForm.get('g_Occuption'); }
    get g_contactDetails_Address() { return this.studentForm.get('g_contactDetails_Address'); }
    get g_contactDetails_City(){ return this.studentForm.get('g_contactDetails_City'); }
    get g_contactDetails_PostalCode(){ return this.studentForm.get('g_contactDetails_PostalCode'); }
    get g_contactDetails_Country(){ return this.studentForm.get('g_contactDetails_Country'); }
    get g_contactDetails_State(){ return this.studentForm.get('g_contactDetails_State'); }
    get g_contactDetails_Phone(){ return this.studentForm.get('g_contactDetails_Phone'); }
    get g_contactDetails_Mobile(){ return this.studentForm.get('g_contactDetails_Mobile'); }
    get g_contactDetails_Email(){ return this.studentForm.get('g_contactDetails_Email'); }

    get SchoolName(){ return this.studentForm.get('SchoolName'); }
    get SchoolAddress(){ return this.studentForm.get('SchoolAddress'); }
    get Qualification(){ return this.studentForm.get('Qualification'); }


}
