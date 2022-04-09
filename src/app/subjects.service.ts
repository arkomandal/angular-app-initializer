import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  setData(data) {
    this.data.next(data);
  }
  
  getData() {
    return this.data.asObservable();
  }

}
