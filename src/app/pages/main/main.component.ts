import { Component, OnInit } from '@angular/core';
import { UrlModel } from 'src/app/models/urlModel';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: UrlModel[] = []
  constructor(
    private urlService: UrlService,
  ) { 
    this.urlService.getURLs();
  }

  ngOnInit(): void {
    this.urlService.urls.subscribe(newData =>
      this.data = newData
    );
  }

  addUrl(url: string) {
    this.urlService.addUrl(url);
  }
}
