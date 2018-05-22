import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {

  private loggedId$ = new BehaviorSubject<boolean>(this.getToken() !== null ? true : false);

  // Implementation of Http service comes from mock-backend module,
  // in production use real Http service from Angular HttpModule
  constructor(private http: Http, @Inject('AUTH_TOKEN') private authToken: string) {
  }

  login(email: string, password: string): void {
    this.http.post('http://your-app-url.com/login', {email: email, password: password})
      .subscribe((response: any) => {
        localStorage.setItem(this.authToken, response.headers.get('Set-Authorization'));
        this.loggedId$.next(true);
      }, () => {
        this.loggedId$.next(false);
      });
  }

  getToken(): string {
    return localStorage.getItem(this.authToken);
  }

  isLoggedId(): BehaviorSubject<boolean> {
    return this.loggedId$;
  }
 
  logout(): void {
    localStorage.removeItem(this.authToken);
    this.loggedId$.next(false);
  }
}
