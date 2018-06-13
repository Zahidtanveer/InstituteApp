import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AcadamicService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getAcadamic() {
        return this._http.get(this.myAppUrl + 'api/Acadamic/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getAcadamicById(id: number) {
        return this._http.get(this.myAppUrl + "api/Acadamic/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveAcadamic(acadamic) {
        return this._http.post(this.myAppUrl + 'api/Acadamic/Create', acadamic)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateAcadamic(acadamic) {
        return this._http.put(this.myAppUrl + 'api/Acadamic/Edit', acadamic)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteAcadamic(id) {
        return this._http.delete(this.myAppUrl + "api/Acadamic/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
