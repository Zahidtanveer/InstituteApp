import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BatchData, CourseData, DataService, DepartmentData } from '../../../services/data.service';
import { SubjectData } from '../../../services/subjects/subject.service';
import { ElectiveSubjectService } from '../../../services/subjects/ElectiveSubject.service';
import { StudentService, StudentData } from '../../../services/student/service.student';


@Component({
    selector: 'createElectiveSubject',
    templateUrl: './AddElectiveSubject.component.html'
})
export class createElectiveSubject {
   
    public courseList: CourseData[];
    public batchList: BatchData[];
    public subBatchList: BatchData[];
    public subjectList: SubjectData[];
    public studentList: StudentData[];

    title: string = "Create";
    subjectForm: FormGroup;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _router: Router, private _dataService: DataService,
        private _electiveSubjectService: ElectiveSubjectService, private _studentService: StudentService) {

        this.subjectForm = this._fb.group({
            id: 0,
            CourseId: ['', [Validators.required]],
            BatchId: ['', [Validators.required]],
            SubjectId: ['', [Validators.required]],
            StudentId: ['', Validators.required],
        })

        
        this.getCourse();
        this.getBatch();
        this.getSubject();
        this.getStudent();
    }
    getStudent() {
        this._studentService.getStudent()
            .subscribe(data => { this.studentList = data });
    }
   
    getBatch() {
        this._dataService.getBatch()
            .subscribe(data => { this.batchList = data });
    }

    getCourse() {
        this._dataService.getCourse()
            .subscribe(data => { this.courseList = data });
    }

    getSubject() {
        this._dataService.getSubject()
            .subscribe(data => { this.subjectList = data });
    }
   
    OnCourseSelection($event: any) {

        var courseID = this.subjectForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(x => x.courseId == courseID && x != null);
        }
    }

    save() {
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._electiveSubjectService.saveElectiveSubject(this.subjectForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/electivesubject']);
                }, error => this.errorMessage = error)
        }

    }

    cancel() {
        this._router.navigate(['/electivesubject']);
    }
    
  
    get CourseId() { return this.subjectForm.get('CourseId'); }
    get BatchId() { return this.subjectForm.get('BatchId'); }
    get SubjectId() { return this.subjectForm.get('SubjectId'); }
    get StudentId() { return this.subjectForm.get("StudentId") }
}
