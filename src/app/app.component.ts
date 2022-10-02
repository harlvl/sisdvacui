import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleDown, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  public currentUser: User;
  public currentUserSubscription: Subscription;
  public publishSubscription: Subscription;

  public faAngleDown = faAngleDown;
  public isProduction: boolean;

  public interval: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = new User();
    this.currentUser.username = 'jperez';
  }

  public ngOnInit() {
    // this.publishSubscription = this.standardsetService.customPublishProgressBar.subscribe(publishProgressBar => {
    //   this.publishProgressBar = publishProgressBar;
    //   this.verifyPublishStatus()}
    //   );
    this.isProduction = environment.production;
  }

  public ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
    this.publishSubscription.unsubscribe();
  }

  public logout() {
    // this.authenticationService.logout();
    // this.router.navigate(['/error'], { queryParams: { code: '300' } }  );
  }
}
