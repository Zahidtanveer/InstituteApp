import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SubjectService } from '../../services/subjects/subject.service'


@Component({
    selector: 'editSubjects',
    templateUrl: './EditSubject.component.html'
})
export class editSubject implements OnInit {

    title: string = "Edit";
    subjectForm: FormGroup;
    errorMessage: any;
    id : number;
    constructor(private _fb: FormBuilder, private _router: Router, private _subjectService: SubjectService
        , private _avRoute: ActivatedRoute) {
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];

        }
        this.subjectForm = this._fb.group({
            id: 0,
            name: ['', [Validators.required]],
            code: ['', [Validators.required]],
            description: [''],
            assignedSubjects:['']
        })
    }


    ngOnInit(){
     
      if (this.id > 0) {
            this._subjectService.getSubjectById(this.id)
                .subscribe(resp => this.subjectForm.setValue(resp)
                    , error => this.errorMessage = error);
        }            
     }


     save() {
        if (!this.subjectForm.valid) {
            return;
        }
         if (this.title == "Edit") {
             this._subjectService.updateSubject(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/subjects']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/subjects']);
    }

    get name() { return this.subjectForm.get('name'); }
    get code() { return this.subjectForm.get('code'); }
    get description() { return this.subjectForm.get('description'); }
}
