import { Component, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() loggedInUser?: firebase.default.User | null;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.isUserLoggedIn().subscribe( user =>{
      this.loggedInUser = user
    },error =>{
    console.log(error);
    
    })
  }

}
