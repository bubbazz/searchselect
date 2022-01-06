import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MookDataService {
  private URL = "https://jsonplaceholder.typicode.com/albums";

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<Album[]> {
    return this.httpClient.get(this.URL) as Observable<Album[]>;
  }
}

export interface Album {
  userID: number,
  id: number,
  title: string;
}