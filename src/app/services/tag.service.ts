import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Tag } from '../models/tag.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TagService {
    //private tagUrl = 'https://localhost:44362/api/tag';
    private tagUrl = 'https://pwa-identidade.azurewebsites.net/api/tag';
    

    constructor(
            private http: HttpClient) { }

    getAll() : Observable<Tag[]>{
        return this.http.get<Tag[]>(this.tagUrl)
    }

    insert(tag: Tag): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post<Tag>(this.tagUrl, tag, httpOptions);
    }
}