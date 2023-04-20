import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  getResult(keyword: string): Observable<any>{
    return this.http.get(this.baseUrl + "?input=" +keyword, {
            responseType: 'text'
    });
  }

}
