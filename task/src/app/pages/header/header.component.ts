import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
login:boolean = false;
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.moviesService.invokelogin.subscribe((data) => {
      this.login = data
     });
  }
  logout(){
    this.login = false
    localStorage.clear();

  }
}
