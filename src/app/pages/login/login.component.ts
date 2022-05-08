import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }

  async login(){
    this.authService.login(this.email.value, this.password.value)
    .then(cred =>{
      console.log("Logged in succesfully!");
      if(this.email.value=="admin@konci.hu"){
        //admin pw = admin123
        this.router.navigateByUrl('/managerPage')
      }
      if(this.email.value!=="admin@konci.hu"){
        this.router.navigateByUrl('/user')
      }
      
    })
    .catch(error=>{
      console.log(error)
    });
  }

  
  ngOnInit(): void {
  }

}
