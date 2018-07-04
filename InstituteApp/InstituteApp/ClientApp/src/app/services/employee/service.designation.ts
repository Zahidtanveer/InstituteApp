import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DesignationService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getDesignation() {
        return this._http.get(this.myAppUrl + 'api/Designation/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getDesignationById(id: number) {
        return this._http.get(this.myAppUrl + "api/Designation/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveDesignation(designation) {
        return this._http.post(this.myAppUrl + 'api/Designation/Create', designation)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateDesignation(designation) {
        return this._http.put(this.myAppUrl + 'api/Designation/Edit', designation)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteDesignation(id) {
        return this._http.delete(this.myAppUrl + "api/Designation/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
