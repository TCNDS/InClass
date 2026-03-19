import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarApiService {
  private url = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  getSearchData(name: string): Observable<any> {
  return this.http
    .get<any>(`${this.url}?search=${name}`)
    .pipe(map(result => result.results[0]));
}

  getFilmData(filmUrls: string[]): Observable<any[]> {
    const requests = filmUrls.map((url) => this.http.get<any>(url));
    return forkJoin(requests);
  }
}

