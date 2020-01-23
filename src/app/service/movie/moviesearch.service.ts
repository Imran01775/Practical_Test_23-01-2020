import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from 'src/app/model/appointmentmodel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({

    'i': 'tt3896198',
    'apikey': 'd1a806e0',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesearchService {
  private extractData(res: Response) {
    let body = res;
    return body || [];
  }
  constructor(private http: HttpClient) { }
  loadMovieName(movieName): Observable<any> {
    //http://www.omdbapi.com/?t=iron
    return this.http.post(GlobalVariable.MovieDataUrl+ movieName, httpOptions).pipe(
      map(this.extractData));
  }
}

