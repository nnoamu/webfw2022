import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KONCI';
  
  loggedInUser? : firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService){
  }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error =>{
      console.log(error)
      localStorage.setItem('user', JSON.stringify('null'));
    })
  }


}
