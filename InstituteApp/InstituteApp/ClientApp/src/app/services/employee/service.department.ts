import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DepartmentService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getDepartment() {
        return this._http.get(this.myAppUrl + 'api/Department/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getDepartmentById(id: number) {
        return this._http.get(this.myAppUrl + "api/Department/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveDepartment(department) {
        return this._http.post(this.myAppUrl + 'api/Department/Create', department)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateDepartment(department) {
        return this._http.put(this.myAppUrl + 'api/Department/Edit', department)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteDepartment(id) {
        return this._http.delete(this.myAppUrl + "api/Department/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
