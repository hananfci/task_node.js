import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  videoList:any = [];
  constructor(private moviesService:MoviesService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit() {
    this.videosList();
  }
  videosList(){
    this.moviesService.onvideosChecked().subscribe (
      response => {
        this.videoList = response;
        console.log(response)
      },
      error => {
  
      });
  }
}
