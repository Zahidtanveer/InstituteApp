import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class StudentCategoryService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getStudentCategory() {
        return this._http.get(this.myAppUrl + 'api/StudentCategory/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getStudentCategoryById(id: number) {
        return this._http.get(this.myAppUrl + "api/StudentCategory/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveStudentCategory(studentCategory) {
        return this._http.post(this.myAppUrl + 'api/StudentCategory/Create', studentCategory)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateStudentCategory(studentCategory) {
        return this._http.put(this.myAppUrl + 'api/StudentCategory/Edit', studentCategory)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteStudentCategory(id) {
        return this._http.delete(this.myAppUrl + "api/StudentCategory/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface StudentCategoryData {
    id: number;
    name: string;
}
