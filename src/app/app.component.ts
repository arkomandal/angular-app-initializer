import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: IMovie = null;

  constructor(private subjectsService: SubjectsService) {
  }

  ngOnInit(): void {
    this.subjectsService.getData().subscribe((data: IMovie) => {
      this.data = data;
    });
  }

}
