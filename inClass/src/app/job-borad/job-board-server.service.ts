import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface JobItem {
  id: number;
  by: string;
  time: number;
  title: string;
  type: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})

export class JobBoardServerService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  getJobIds(): Observable<number[]>{
    return this.http.get<number[]>(`${this.baseUrl}/jobstories.json`);
  }

  getJobById(id: number): Observable<JobItem> {
    return this.http.get<JobItem>(`${this.baseUrl}/item/${id}.json`);
  }
}
