import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UrlModel } from '../models/urlModel';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  readonly urls = new BehaviorSubject([] as any);

  constructor(
    private http: HttpService
  ) { }

  getURLs () {
    this.http.getURLs().subscribe(items =>{
      this.urls.next(items);
      console.log(items);
    });
  }

  addUrl(url: string) {
    return this.http.addURL({URL: url});
  }
  
}
