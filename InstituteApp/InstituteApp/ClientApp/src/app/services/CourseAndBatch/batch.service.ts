import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class BatchService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getBatch() {
        return this._http.get(this.myAppUrl + 'api/Batch/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getBatchById(id: number) {
        return this._http.get(this.myAppUrl + "api/Batch/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveBatch(batch) {
        return this._http.post(this.myAppUrl + 'api/Batch/Create', batch)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateBatch(batch) {
        return this._http.put(this.myAppUrl + 'api/Batch/Edit', batch)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteBatch(id) {
        return this._http.delete(this.myAppUrl + "api/Batch/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
