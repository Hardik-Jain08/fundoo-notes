import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signUpForm: FormGroup;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private userAuth: UserService) {
    this.signUpForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });

    this.signInForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmitSignUp(form: FormGroup) {
    console.log(form.value);
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Password', form.value.password);
    this.userAuth.signUp({
      firstName: form.value.name.split(' ')[0],
      lastName: form.value.name.split(' ')[1],
      service: 'string',
      email: form.value.email,
      password: form.value.password
    }).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

  onSubmitSignIn(form: FormGroup) {
    console.log(form.value);
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Password', form.value.password);
    this.userAuth.login({
      email: form.value.email,
      password: form.value.password
    }).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('access_token', res.id);
        window.location.href = '/notes';
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

  container = '';

  addClass() {
    this.container = 'right-panel-active';
  }

  removeClass() {
    this.container = '';
  }

  getInputData(event: Event) {}
}