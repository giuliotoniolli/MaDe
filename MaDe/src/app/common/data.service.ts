import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schools, SingleSchool } from './schooltype';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public mostraPin:Boolean = false;
  // public baseUrl = 'https://zany-memory-q7q5x4qp7ggwhx759-1337.app.github.dev'
  // public baseUrl = 'http://127.0.0.1:1337'
  public baseUrl = 'https://refactored-cod-7v9jx59pvxp5fxpvj-1337.app.github.dev'

  constructor(private http: HttpClient) { }

  getSchools(): Observable<Schools> {
    return this.http.get<Schools>(this.baseUrl + '/api/schools?populate=*');
  }

  getSchoolById(id:number): Observable<SingleSchool> {
    return this.http.get<SingleSchool>(this.baseUrl + `/api/schools/${id}?populate=*`)
  } 
}
