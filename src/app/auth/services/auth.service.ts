import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, CheckTokenResponse, LoginResponse, Roles, User } from '../interfaces';
import { RegisterResponse } from '../interfaces/register-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly baseUrl : string = environment.baseUrl;

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>( AuthStatus.checking);
  private _currentRole = signal<Roles[]>( [Roles.user]);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());
  public currentRole = computed(() => this._currentRole());

  constructor(){
    this.checkAuthStatus().subscribe();
  }

  private setAuthUser( user: User, token: string): boolean{
    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated);
    this._currentRole.set( user.roles);

    localStorage.setItem('token',token);

    return true;
  }

  public login(email : string, password: string): Observable<boolean>{
    const url = this.baseUrl+'/auth/login';
    const body = {email,password};

    return ( this.http.post<LoginResponse>(url, body)).pipe(
      tap( ({user, token}) => this.setAuthUser(user,token)),
      map( () => true),
      catchError( error => {
        return throwError( () => error.error.message);
      }),
    );
  }


  public checkAuthStatus() : Observable<boolean>{

    const url = `${this.baseUrl}+/auth/check-token`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    if(!token){
      return of(false);
    } else {
      return this.http.get<CheckTokenResponse>(url, {headers}).
      pipe(
        map( ({token,user}) => this.setAuthUser(user,token)),
        catchError(() =>{
          this._authStatus.set(AuthStatus.notAuthenticated);

          return of(false)
        })
      )
    }
  }


  public register(email : string, name: string, password: string){
    const url = this.baseUrl+'/auth/register';
    const body = { email, name, password};
    return ( this.http.post<RegisterResponse>(url, body).pipe(
      tap( ( {user, token} ) => this.setAuthUser(user,token)),
      map( () => true),
      catchError( error => {
        return throwError( () => error.error.message)}),
    ));
  }
  public logout() : void{
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
