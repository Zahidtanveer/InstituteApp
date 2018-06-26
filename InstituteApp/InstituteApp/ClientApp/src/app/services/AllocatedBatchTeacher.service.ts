import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AllocateBatchTeacherService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getAllocateBatchTeacher() {
        return this._http.get(this.myAppUrl + 'api/AllocateBatchTeacher/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getAllocateBatchTeacherById(id: number) {
        return this._http.get(this.myAppUrl + "api/AllocateBatchTeacher/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveAllocateBatchTeacher(AllocateBatchTeacher) {
        return this._http.post(this.myAppUrl + 'api/AllocateBatchTeacher/Create', AllocateBatchTeacher)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateAllocateBatchTeacher(AllocateBatchTeacher) {
        return this._http.put(this.myAppUrl + 'api/AllocateBatchTeacher/Edit', AllocateBatchTeacher)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteAllocateBatchTeacher(id) {
        return this._http.delete(this.myAppUrl + "api/AllocateBatchTeacher/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
