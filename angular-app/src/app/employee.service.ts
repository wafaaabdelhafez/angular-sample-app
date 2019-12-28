import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class EmployeeService {

  private _url = "/assets/data/employee.json";

  public getEmployess(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
        .catch(this.errorHandler);
  }

  constructor(private http: HttpClient) { 
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
