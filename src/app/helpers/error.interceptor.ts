import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../../app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner"; 
import { Router } from '@angular/router';
import { Util } from '../helpers/util';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService,
        private SpinnerService:NgxSpinnerService,
        private router: Router, private util: Util ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            this.SpinnerService.hide();
            if(err.status === 401){
                this.authenticationService.logout();
                this._redirectError(err.status, err.error.message);
            } else if (err.status === 404 || err.status === 422){
                this.util.errorMessage = err.error.errorMessage   
            } else  {
                this._redirectError(err.status, err.error.message);
            }
            return  throwError(err);
        }))
    }

    _redirectError(status: number, message: string) {
        this.util.errorMessage = message;
        this.router.navigate(['/error'], { queryParams: { code: status } });
    }

}
