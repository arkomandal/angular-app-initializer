import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { SubjectsService } from './subjects.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private httpClient: HttpClient,
    private subjectsService: SubjectsService
  ) { }

  init() {
    return new Promise<void>((resolve, reject) => {
      this.httpClient.get(environment.baseUrl).subscribe(res => {
        console.log(res);
        this.subjectsService.setData(res);
        resolve();
      }, error => {
        alert("Http request failed. App cannot load! Error: " + error?.error?.message);
        reject();
      });
    });
  }

}
