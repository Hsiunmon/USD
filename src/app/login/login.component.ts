import {Component, HostBinding} from '@angular/core';
import { Router } from '@angular/router'; //导入router服务

@Component({
  selector: 'app-login',
  styleUrls: [ './usdlogin.style.scss' ],
  templateUrl: './login.template.html'
})

export class LoginComponent {
  @HostBinding('class') classes = 'login-page app';
  configUrl = 'assets/config.json';

    constructor(private router: Router) { }


    public loginfrm = { email: '', password: '' }

    onLogin(): void {
        console.log(this.loginfrm);
        if (this.loginfrm.email == "1@qq.com" && this.loginfrm.password == "1") {
            alert('Login success');
            setTimeout(() => {
                //跳转到login路由（绝对路径）
                // this.router.navigateByUrl("login") 
                this.router.navigate(['/app'], { fragment: 'dashboard' });
            }, 2000);
        } else {
            alert('Login failure');
        }
    }
  ngOnInit(){
    document.body.style.background="#545454"
  }
}
