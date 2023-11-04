import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  public myForm : FormGroup = this.fb.group({
    email: ['miguel@google.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]]
  });


  public login(){
    const { email,  password } = this.myForm.value;
    this.authService.login(email,password).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),

      error: (err) => console.log(err),
    });
  }

}
