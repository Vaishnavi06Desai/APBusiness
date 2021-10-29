import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor( private af: AngularFireAuth, ) { }
  signin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }
 login() {
    this.af.signInWithEmailAndPassword(this.signin.get("email")?.value, this.signin.get("password")?.value) .then(res => {
      console.log("success");
    }) 
 }
}
