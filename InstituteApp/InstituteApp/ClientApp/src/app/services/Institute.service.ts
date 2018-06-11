import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class InstituteService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getInstitute() {
        return this._http.get(this.myAppUrl + 'api/Institute/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getInstituteById(id: number) {
        return this._http.get(this.myAppUrl + "api/Institute/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }  
    saveInstitute(institute) {
        return this._http.post(this.myAppUrl + 'api/Institute/Create', institute)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateInstitute(institute) {
        return this._http.put(this.myAppUrl + 'api/Institute/Edit', institute)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteInstitute(id) {
        return this._http.delete(this.myAppUrl + "api/Institute/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }  
   
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
