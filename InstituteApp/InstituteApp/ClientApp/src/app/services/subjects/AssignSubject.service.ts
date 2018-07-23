import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AssignSubjectService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getAssignSubject() {
        return this._http.get(this.myAppUrl + 'api/AssignSubject/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getAssignSubjectById(id: number) {
        return this._http.get(this.myAppUrl + "api/AssignSubject/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveAssignSubject(AssignSubject) {
        return this._http.post(this.myAppUrl + 'api/AssignSubject/Create', AssignSubject)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateAssignSubject(AssignSubject) {
        return this._http.put(this.myAppUrl + 'api/AssignSubject/Edit', AssignSubject)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteAssignSubject(id) {
        return this._http.delete(this.myAppUrl + "api/AssignSubject/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface AssignSubjectData {
    id: number,
    courseId:number,
    batchId: number,
    subjectId:number
}
