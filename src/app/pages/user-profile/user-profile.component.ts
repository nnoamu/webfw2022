import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private router: Router, 
    private authService: AuthService
    ) { }
  

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().then(()=>{
      console.log('Logged out succesfully!')
      this.router.navigateByUrl('/main')
    }).catch(error =>{
      console.log(error);
      
    })
  }

}
