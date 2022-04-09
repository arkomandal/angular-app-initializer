import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data = [];

  constructor(private subjectsService: SubjectsService) {
  }

  ngOnInit(): void {
    this.subjectsService.getData().subscribe(data => {
      this.data = data;
    });
  }

}
