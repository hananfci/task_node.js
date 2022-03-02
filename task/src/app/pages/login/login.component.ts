import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup;
  constructor(private router:Router,private route:ActivatedRoute,private moviesService:MoviesService) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required]),
    });
  }
  onSubmit(){
    var Email = this.loginForm.value.email;
    localStorage.setItem ('token', Email);
    this.router.navigate(['pages/index'])
    this.moviesService.login(true);

  }
}
