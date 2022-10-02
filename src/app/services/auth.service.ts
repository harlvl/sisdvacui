import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of, Subscription  } from 'rxjs';
import { delay, map  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SessionConstants } from '../../constants/session.constants';
import { AuthIdle } from '../helpers/auth.idle';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public jwtHelper = new JwtHelperService();
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;
    public tokenSubscription = new Subscription();

    public headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Api-Key', environment.apiKey);

    constructor(private http: HttpClient, private authIdle: AuthIdle) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public validateParams(params: Params) {
        // Maybe make additional validations here
        if (params.keycode && params.username && params.identityId) {
            return true;
        }
        return false;
    }

    public authorize(keycode: string, username: string, identityId: string, expirationTime: number) {
        this.http.post<any>(environment.jwtAuthAPI, { body: { username, keycode, identityId, expirationTime } }, { headers: this.headers })
        .pipe(map((res) => {
            return new HttpResponse({ status: 200, body: {
                    username,
                    keycode,
                    token: res.token,
                    identityId,
                    },
            });
        })).subscribe((response) => {
            if (response.body.token) {
                this.authIdle.watchInactivity(SessionConstants.ALERT_SESSION_IDLE);
                const timeout = (this.jwtHelper.getTokenExpirationDate(response.body.token).valueOf() - new Date().valueOf()) - 180000;
                localStorage.setItem('currentUser', JSON.stringify(response.body));
                this.expirationCounter(timeout);
                this.currentUserSubject.next(response.body);
            }
        });
    }

    public logout() {
        this.tokenSubscription.unsubscribe();
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    public expirationCounter(timeout) {
        this.tokenSubscription.unsubscribe();
        this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {
            this.authIdle.showModal(SessionConstants.ALERT_SESSION_TIMEOUT);
       });
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
}
