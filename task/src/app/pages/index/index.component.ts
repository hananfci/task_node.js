import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IVideo } from '../../services/movie.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  /* @ViewChild('videoPlayer',{static: false})  videoPlayer :  ElementRef; */
  videoList:any = [];
  checkoutFlag:boolean = false;
  sindelVideo :IVideo;
  videoId:number;
  

  constructor(private moviesService:MoviesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.videosList();
  }
videosList(){
  this.moviesService.onvideos().subscribe (
    response => {
      this.videoList = response;
      console.log(response)
    },
    error => {

    });
}

/* toggleVideo(event: any) {
    this.videoPlayer.nativeElement.play();
} */
showCheckout(id:number){
this.checkoutFlag = true;
this.videoId = id;
this.moviesService.onGetById(id).subscribe(
  response => {
    this.sindelVideo = response;
},
error =>{
}
)
}
backTOlist(){
  this.checkoutFlag = false;
}
checkOut(){
 
  //this.videoId
}
}
