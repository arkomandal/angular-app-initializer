import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private data: BehaviorSubject<IMovie> = new BehaviorSubject(null);

  constructor() { }

  setData(data: IMovie) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }

}
