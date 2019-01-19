import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users;

  constructor(public navCtrl: NavController, private http: HttpClient) {

    this.http.get('https://randomuser.me/api?results=10').subscribe(users => {
      this.users = users['results'];
    });
  }

}
