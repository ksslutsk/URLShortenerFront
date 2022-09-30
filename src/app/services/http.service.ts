import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://localhost:7041';
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(
    private readonly http: HttpClient
  ) { }

  addURL(model: any) {
    console.log(model);
    return this.http.post(this.apiUrl, model, this.httpOptions);
  }
  getURLs(){
    return this.http.get(this.apiUrl);
  }

}
