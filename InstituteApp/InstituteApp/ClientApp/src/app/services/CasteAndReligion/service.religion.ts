import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ReligionService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getReligion() {
        return this._http.get(this.myAppUrl + 'api/Religion/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getReligionById(id: number) {
        return this._http.get(this.myAppUrl + "api/Religion/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveReligion(religion) {
        return this._http.post(this.myAppUrl + 'api/Religion/Create', religion)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateReligion(religion) {
        return this._http.put(this.myAppUrl + 'api/Religion/Edit', religion)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteReligion(id) {
        return this._http.delete(this.myAppUrl + "api/Religion/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
