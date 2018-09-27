import {Component, HostBinding} from '@angular/core';
import { Router } from '@angular/router'; //����router����

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
                //��ת��login·�ɣ�����·����
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
