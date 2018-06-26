import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class SyllabusService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getSyllabus() {
        return this._http.get(this.myAppUrl + 'api/Syllabus/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getSyllabusById(id: number) {
        return this._http.get(this.myAppUrl + "api/Syllabus/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveSyllabus(Syllabus) {
        return this._http.post(this.myAppUrl + 'api/Syllabus/Create', Syllabus)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateSyllabus(Syllabus) {
        return this._http.put(this.myAppUrl + 'api/Syllabus/Edit', Syllabus)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteSyllabus(id) {
        return this._http.delete(this.myAppUrl + "api/Syllabus/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
