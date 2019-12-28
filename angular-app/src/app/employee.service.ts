import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private _url = "/assets/data/employee.json";

  public getEmployess(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  constructor(private http: HttpClient) { 
  }

}
