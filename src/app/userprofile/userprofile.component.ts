import { Component } from '@angular/core';

@Component({
    selector: 'app-userprofile',
    styleUrls: ['./userprofile.style.css'],
    templateUrl: './userprofile.template.html'
})
export class UserprofileComponent {
  user = {
    name: 'John Doe',
    company: 'Doe Industriers, LLC.',
    Password: 'Password',
    ConfirmPassword: 'Confirm Password'
  };

  constructor() { }

  ngOnInit() {

  }
  onSelect(): void {
    console.log(this.user);
  }
}
