import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SubjectAllocationService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getSubjectAllocation() {
        return this._http.get(this.myAppUrl + 'api/SubjectAllocation/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getSubjectAllocationById(id: number) {
        return this._http.get(this.myAppUrl + "api/SubjectAllocation/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveSubjectAllocation(SubjectAllocation) {
        return this._http.post(this.myAppUrl + 'api/SubjectAllocation/Create', SubjectAllocation)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateSubjectAllocation(SubjectAllocation) {
        return this._http.put(this.myAppUrl + 'api/SubjectAllocation/Edit', SubjectAllocation)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteSubjectAllocation(id) {
        return this._http.delete(this.myAppUrl + "api/SubjectAllocation/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface SubjectAllocationData {
    id: number,
    departmentId: number,
    teacherId: number,
    courseId: number,
    batchId: number,
    subjectId: number
}
