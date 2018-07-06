import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class StudentService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getStudent() {
        return this._http.get(this.myAppUrl + 'api/Student/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getStudentById(id: number) {
        return this._http.get(this.myAppUrl + "api/Student/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveStudent(student) {
        return this._http.post(this.myAppUrl + 'api/Student/Create', student)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateStudent(student) {
        return this._http.put(this.myAppUrl + 'api/Student/Edit', student)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteStudent(id) {
        return this._http.delete(this.myAppUrl + "api/Student/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface StudentData {
    id: number;
    acadamicYear: string;
    registerNumber: string;
    joiningDate: string;
    course: string;
    batch: string;
    rollNo: string;
}
