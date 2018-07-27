import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class TimeTableService {
    myAppUrl: string = "";
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getTimeTable() {
        return this._http.get(this.myAppUrl + 'api/TimeTable/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getTimeTableById(id: number) {
        return this._http.get(this.myAppUrl + "api/TimeTable/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveTimeTable(TimeTable) {
        return this._http.post(this.myAppUrl + 'api/TimeTable/AddTimeTable', TimeTable)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateTimeTable(TimeTable) {
        return this._http.put(this.myAppUrl + 'api/TimeTable/Edit', TimeTable)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteTimeTable(id) {
        return this._http.delete(this.myAppUrl + "api/TimeTable/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
export interface TimeTableData {
    Id: number,
    Name: string,
    Day: string,
    CourseId: number,
    BatchId: number,
    TeacherId: number,
    TeacherName: string,
    SubjectId: number
    SubjectName: string,
    StartTime: string,
    EndTime: string

}
