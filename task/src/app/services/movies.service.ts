import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IVideo } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiRoot=environment.apiRoot;
  headers = new HttpHeaders();
  url = 'youtube-to-mp4.p.rapidapi.com/url=&title?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIfNB5RTxnhI&title=Call%20of%20Duty%20%3A%20Modern%20Warfare%202%20Remastered%20-%20All%20Weapon%20Reload%20Animations%20in%204%20Minutes'
  urlvideos = "http://localhost:3000"
  invokelogin = new EventEmitter();
  constructor(private http:HttpClient) { }
  login(login?: boolean) {
    this.invokelogin.emit(login);
  }
  onvideos(){

   // this.headers = this.headers.set('x-rapidapi-host','youtube-to-mp4.p.rapidapi.com');
   // this.headers = this.headers.set('x-rapidapi-key','9f77018195msh58cbf8a77a7a46bp1c073djsndfbb6e5db268');
   // const options = {headers: this.headers};
   // return this.http.get(`${this.url}`,options);
    return this.http.get<IVideo>(`${this.urlvideos}/videos`)
  }
  onvideosChecked(){
     return this.http.get<IVideo>(`${this.urlvideos}/videosCkecked`)
   }
   onGetById(id:number){
     return this.http.get<IVideo>(`${this.urlvideos}/videos/${id}`)

   }
  
}
