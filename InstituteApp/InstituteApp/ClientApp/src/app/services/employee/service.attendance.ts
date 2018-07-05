import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EmployeeData } from './service.employee';


@Injectable()
export class EmployeeAttendanceService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getEmployeeAttendance() {
        return this._http.get(this.myAppUrl + 'api/EmployeeAttendance/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getEmployeeAttendanceById(id: number) {
        return this._http.get(this.myAppUrl + "api/EmployeeAttendance/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveEmployeeAttendance(employeeAttendance) {
        return this._http.post(this.myAppUrl + 'api/EmployeeAttendance/Create', employeeAttendance)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateEmployeeAttendance(employeeAttendance) {
        return this._http.put(this.myAppUrl + 'api/EmployeeAttendance/Edit', employeeAttendance)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteEmployeeAttendance(id) {
        return this._http.delete(this.myAppUrl + "api/EmployeeAttendance/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface EmployeeAttendanceData {
    Id: number;
    Year: string;
    Month: string;
    Day: string;
    AttendanceDate: string;
    IsPresent: boolean;
    Employee: EmployeeData[];
}
