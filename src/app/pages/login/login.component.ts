import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: Login;
  constructor(private http: HttpClient, private router:Router){
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('https://reqres.in/api/login', this.loginObj).subscribe((res: any) => {
      console.log('Response:', res);
      if (res.token) {
        alert("Login Success");
        this.router.navigateByUrl('/homepage');
      } else {
        alert(res.error || "Login failed");
      }
    }, error => {
      console.error("HTTP Error:", error);
      alert("An error occurred. Please try again.");
    });
  }

  ngOnInit(): void {
  }
}
export class Login{
  email: string;
  password: string;

  constructor(){
    this.email='';
    this.password='';
  }

}
