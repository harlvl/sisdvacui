import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})

export class TrialService {
    public headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) {

    }

    public getAllTrials() {
        return this.http.get<any>(environment.trialService + '/all', {headers: this.headers});
    }

}
