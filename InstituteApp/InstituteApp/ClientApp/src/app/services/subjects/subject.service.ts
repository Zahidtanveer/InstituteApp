import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SubjectService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getSubject() {
        return this._http.get(this.myAppUrl + 'api/Subject/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getSubjectById(id: number) {
        return this._http.get(this.myAppUrl + "api/Subject/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveSubject(Subject) {
        return this._http.post(this.myAppUrl + 'api/Subject/Create', Subject)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateSubject(Subject) {
        return this._http.put(this.myAppUrl + 'api/Subject/Edit', Subject)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteSubject(id) {
        return this._http.delete(this.myAppUrl + "api/Subject/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface SubjectData {
    id: number,
    name: string,
    code: string
   
}
