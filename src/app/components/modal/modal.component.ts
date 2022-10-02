import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CountdownComponent } from 'ngx-countdown';
import { Subscription } from 'rxjs';
import { SessionConstants } from '../../../constants/session.constants';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @ViewChild('countdown', null) public counter: CountdownComponent;

  public currentUser: User;
  public currentUserSubscription: Subscription;
  public alertType = 1;

  constructor(public modalRef: BsModalRef,
              private router: Router,
              private authenticationService: AuthenticationService,
              private bnIdle: BnNgIdleService) {
      this.authenticationService.currentUser.subscribe((x) => this.currentUser = x);
    }

  public ngOnInit() {
  }

  public logout() {
    this.bnIdle.stopTimer();
    // this.authenticationService.logout();
    // this.router.navigate(['/error'], { queryParams: { code: '300' } }  );
    this.modalRef.hide();
  }

  public continue() {
    if (this.alertType == SessionConstants.ALERT_SESSION_IDLE) {
      this.bnIdle.resetTimer();
    } else {
      this.authenticationService.authorize(this.currentUser.keycode, this.currentUser.username, this.currentUser.identityId, SessionConstants.EXTENDED_SESSION_TIMEOUT);
    }

    this.modalRef.hide();
  }

  public onTimerFinished(e) {
    if (e.status == 3) {
      this.logout();
    }
  }

}
