import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Apod } from '../Interfaces/apod.interface';

const URL = environment.API_APOD;
const api_key = environment.API_KEY;

let params = new HttpParams();
params.append('api_key',api_key);

@Injectable({
  providedIn: 'root'
})
export class ApodServicesService {

  constructor(private http: HttpClient) { }

  public getApod():Observable<Apod[]>{
    return this.http.get<Apod[]>(URL+'?api_key='+api_key)
    .pipe(
      catchError(err=>{
        console.log(err);
        return throwError(err);
      })
    );
  }

}
