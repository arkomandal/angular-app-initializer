import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { SubjectsService } from './subjects.service';
import {IMovie} from './movie';
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
      this.httpClient.get<IMovie>(environment.baseUrl).subscribe(res => {
        this.subjectsService.setData(res);
        resolve();
      }, error => {
        alert("Http request failed. App cannot load! Error: " + error?.error?.message);
        reject();
      });
    });
  }

}
