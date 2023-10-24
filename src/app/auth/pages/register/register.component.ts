import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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

  public isValidField(field : string){
    if(!this.myForm.touched ){
      return false;
    }else if( this.myForm.controls[field].valid)
      return false;
    return true;
  }

  public getCustomError(field: string){
    if( this.myForm.controls['field']) return '';

    const errors = this.myForm.controls[field].errors || {};

    for(const key of Object.keys(errors)){
      switch(key){
        case 'email':
          return 'Este campo debe ser un email';
        case 'required':
          return 'Este es un campo obligatorio';
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength} caracteres`
        default:
          return '';
      }
    }
    return '';
  }

  public register(){
    const {name,email,password, ...rest} = this.myForm.value;

    if(this.myForm.valid){

      this.authService.register(email,name,password).subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (err) => console.log(err),
      });
    }
  }
}
