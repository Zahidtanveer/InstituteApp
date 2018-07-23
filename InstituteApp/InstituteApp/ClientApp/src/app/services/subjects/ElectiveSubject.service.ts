import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ElectiveSubjectService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getElectiveSubject() {
        return this._http.get(this.myAppUrl + 'api/ElectiveSubject/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getElectiveSubjectById(id: number) {
        return this._http.get(this.myAppUrl + "api/ElectiveSubject/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveElectiveSubject(ElectiveSubject) {
        return this._http.post(this.myAppUrl + 'api/ElectiveSubject/Create', ElectiveSubject)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateElectiveSubject(ElectiveSubject) {
        return this._http.put(this.myAppUrl + 'api/ElectiveSubject/Edit', ElectiveSubject)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteElectiveSubject(id) {
        return this._http.delete(this.myAppUrl + "api/ElectiveSubject/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface ElectiveSubjectData {
    id: number,
    courseId: number,
    batchId: number,
    subjectId: number,
    studentId: number
}
