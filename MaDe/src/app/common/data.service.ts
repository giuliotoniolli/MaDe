import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './apptypes';
import { School } from './schooltype';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = 'https://zany-memory-q7q5x4qp7ggwhx759-1337.app.github.dev'

  constructor(private http: HttpClient) { }

  getInstitutes(): Observable<Root> {
    return this.http.get<Root>(this.baseUrl + '/api/institutes?&populate=*');
  }

  getSchools(): Observable<School> {
    return this.http.get<School>(this.baseUrl + '/api/institutes?populate[schools][populate][0]=Logo')
  }
}
