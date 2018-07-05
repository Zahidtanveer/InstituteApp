import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class LeaveCategoryService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getLeaveCategory() {
        return this._http.get(this.myAppUrl + 'api/LeaveCategory/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getLeaveCategoryById(id: number) {
        return this._http.get(this.myAppUrl + "api/LeaveCategory/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveLeaveCategory(leaveCategory) {
        return this._http.post(this.myAppUrl + 'api/LeaveCategory/Create', leaveCategory)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateLeaveCategory(leaveCategory) {
        return this._http.put(this.myAppUrl + 'api/LeaveCategory/Edit', leaveCategory)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteLeaveCategory(id) {
        return this._http.delete(this.myAppUrl + "api/LeaveCategory/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface LeaveCategoryData {
    id: number;
    name: string;
}
