import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm : FormGroup = this.fb.group({
    name : ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required, Validators.minLength(8)]],

  })


  public register(){
    const {name,email,password, ...rest} = this.myForm.value;
    console.log('register works');

    this.authService.register(email,name,password).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (err) => console.log(err),
    }

    );
  }
}
