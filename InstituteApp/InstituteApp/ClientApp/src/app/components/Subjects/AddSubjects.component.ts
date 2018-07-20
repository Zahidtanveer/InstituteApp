import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SubjectService } from '../../services/subjects/subject.service'


@Component({
    selector: 'createSubjects',
    templateUrl: './AddSubjects.component.html'
})
export class createSubjects {
   
    title: string = "Create";
    subjectForm: FormGroup;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _router: Router, private _subjectService:SubjectService) {

        this.subjectForm = this._fb.group({
            id: 0,
            Name: ['', [Validators.required]],
            Code: ['', [Validators.required]],
            Description: [''],
         })
     }

    save() {
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._subjectService.saveSubject(this.subjectForm.value)
                .subscribe((data) => {
                      this._router.navigate(['/subjects']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/subjects']);
    }
    get Name() { return this.subjectForm.get('Name'); }
    get Code() { return this.subjectForm.get('Code'); }
    get Description() { return this.subjectForm.get('Description'); }
}
