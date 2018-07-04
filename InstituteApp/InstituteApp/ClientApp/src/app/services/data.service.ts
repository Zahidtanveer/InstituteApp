import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getCountries() {
        return this._http.get(this.myAppUrl + 'api/Home/GetCountries')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getStates() {
        return this._http.get(this.myAppUrl + 'api/Home/GetStates')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getUserTypes() {
        return this._http.get(this.myAppUrl + 'api/Home/GetUserTypes')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getDesignation() {
        return this._http.get(this.myAppUrl + 'api/Designation/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getDepartment() {
        return this._http.get(this.myAppUrl + 'api/Department/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface CountryData {
    id: number;
    name: string
}
export interface StateData {
    id: number;
    name: string;
    countryId: number
}
export interface UserTypeData {
    id: number;
    name: string;
}
export interface DepartmentData {
    id: number;
    name: string;
    code: string;
}
export interface DesignationData {
    id: number;
    name: string;
}
