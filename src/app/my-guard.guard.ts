import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MyGuardGuard implements CanActivate {
  enteredPassword: string;
  private password = '123456'

    public setTest(value: string) {
        this.enteredPassword = value;
        console.log(this.enteredPassword);
    }
    
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.enteredPassword === this.password ) {return true; }
      // tslint:disable-next-line: one-line
    
    }
    

   

}
