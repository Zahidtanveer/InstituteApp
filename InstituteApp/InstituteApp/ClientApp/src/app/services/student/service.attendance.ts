import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { StudentData } from './service.student';


@Injectable()
export class StudentAttendanceService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getStudentAttendance(batch, course,  date) {
        return this._http.get(this.myAppUrl + 'api/StudentAttendance/Index' + "?batch=" + batch +"&&course=" + course + "&&date=" + date)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getStudentAttendanceById(id: number) {
        return this._http.get(this.myAppUrl + "api/StudentAttendance/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveStudentAttendance(studentAttendance) {
        return this._http.post(this.myAppUrl + 'api/StudentAttendance/Create', studentAttendance)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateStudentAttendance(studentAttendance) {
        return this._http.put(this.myAppUrl + 'api/StudentAttendance/Edit', studentAttendance)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteStudentAttendance(id) {
        return this._http.delete(this.myAppUrl + "api/StudentAttendance/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface StudentAttendanceData {
    Id: number;
    Year: string;
    Month: string;
    Day: string;
    AttendanceDate: string;
    IsPresent: boolean;
    Student: StudentData[];
}
