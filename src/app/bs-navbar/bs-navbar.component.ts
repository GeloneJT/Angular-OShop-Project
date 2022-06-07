import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {
  user$!: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    if (this.user$ !== null) {
      (this.user$ as any) = afAuth.authState;
    }
  }

  logout() {
    this.afAuth.signOut();
  }
}
