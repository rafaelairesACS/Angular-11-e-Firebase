import { Injectable } from '@angular/core';
import	{	Observable	}	from 'rxjs';
import	{	AngularFireAuth	}	from '@angular/fire/auth';
import	firebase	from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User>

  constructor(private afAuth:AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email:string , senha:string): Promise<firebase.auth.UserCredential>{
    return this.afAuth.signInWithEmailAndPassword(email,senha);
  }

  logout(): Promise<void>{
    return this.afAuth.signOut();
  }

   resetPassword(email : string){
    return this.afAuth.sendPasswordResetEmail(email)
   }

}