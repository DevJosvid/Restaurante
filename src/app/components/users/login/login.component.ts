import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  message: any = "";
  status: boolean = false;
  constructor(private login: LoginService, private router: Router) { 
    this.user = {
      email: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.user);
    this.login.login(this.user).subscribe((res: any) => {
      //console.log(res);
      if(res.status){
        localStorage.setItem('token', res.token )
        localStorage.setItem('user',  JSON.stringify(res.data));
        return this.router.navigate(['/dashboard']);
      } else {
        this.message = res.message
        this.status = true;
      }
    });
  }

}
