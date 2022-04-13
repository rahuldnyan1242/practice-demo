import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesignUtilitiesService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users';

  users(): Observable<any> {
    return this.http.get(this.url);
  }

  // userName = new Subject();
  userName = new BehaviorSubject<string>('Family Name');
}
