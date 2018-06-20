import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CasteService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getCaste() {
        return this._http.get(this.myAppUrl + 'api/Caste/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getCasteById(id: number) {
        return this._http.get(this.myAppUrl + "api/Caste/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveCaste(caste) {
        return this._http.post(this.myAppUrl + 'api/Caste/Create', caste)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateCaste(caste) {
        return this._http.put(this.myAppUrl + 'api/Caste/Edit', caste)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteCaste(id) {
        return this._http.delete(this.myAppUrl + "api/Caste/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
