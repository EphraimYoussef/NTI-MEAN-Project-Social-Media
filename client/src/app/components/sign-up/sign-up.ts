import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  signUpForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      imgUrl: ['' , [Validators.required , Validators.pattern('https?://.+')]]
    }, { validators: this.passwordMatchValidator });
  }
  passwordMatchValidator(form: FormGroup) { 
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Sign up successful', this.signUpForm.value);
      this.router.navigate(['']);
    }
    else {
      console.log('Sign up form is invalid');
    }
  }
}
