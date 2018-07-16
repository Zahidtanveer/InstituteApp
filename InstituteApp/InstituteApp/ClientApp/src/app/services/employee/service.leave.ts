import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable, Inject } from '@angular/core';


@Injectable()
export class LeaveService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getLeave() {
        return this._http.get(this.myAppUrl + 'api/Leave/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getLeaveById(id: number) {
        return this._http.get(this.myAppUrl + "api/Leave/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveLeave(leaveApp) {
        return this._http.post(this.myAppUrl + 'api/Leave/Create', leaveApp)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveLeaveDetail(leave) {
        return this._http.post(this.myAppUrl + 'api/Leave/AddDetails', leave)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateLeave(leave) {
        return this._http.put(this.myAppUrl + 'api/Leave/Edit', leave)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteLeave(id) {
        return this._http.delete(this.myAppUrl + "api/Leave/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface LeaveData {
    id: number;
    designationName: string;
    fromDate: string;
    toDate: string;
    reason: string;
    leaveType: string;
    leaveCount: number; 
    remainingLeaves: number;
    status: string;
}
