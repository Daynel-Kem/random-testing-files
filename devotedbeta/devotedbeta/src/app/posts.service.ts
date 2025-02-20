import { Injectable } from '@angular/core';
import { Posts } from './types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const backendUrl = 'http://localhost:8000';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`/api/posts`)
  }

  getPostById(id: string): Observable<Posts> {
    return this.http.get<Posts>(`${backendUrl}/api/posts/${id}`);
  }

  addViewToPost(id: string): Observable<Posts> {
    return this.http.post<Posts>(`${backendUrl}/api/posts/${id}/add-view`, {}, httpOptions)
  }



}
