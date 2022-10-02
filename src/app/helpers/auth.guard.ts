import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private SpinnerService: NgxSpinnerService,
    ) {}

    public canActivate(route: ActivatedRouteSnapshot) {
        this.SpinnerService.show();
        const result = true;
        this.SpinnerService.hide();
        return result;

    }
}
