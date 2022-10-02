import { Injectable } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { SessionConstants } from '../../constants/session.constants';

@Injectable()
export class AuthIdle {

    modalRef: BsModalRef;

    constructor(
        private modalService: BsModalService,
        private bnIdle: BnNgIdleService
    ) { }

    watchInactivity(alertType: number){
        this.bnIdle.startWatching(SessionConstants.IDLE_TIMEOUT).subscribe((isTimedOut: boolean) => {
            if (isTimedOut) {
              this.bnIdle.stopTimer();
              this.showModal(alertType);
            }
        });
    }

    showModal(alertType: number){
        this.modalRef = this.modalService.show(ModalComponent, {
            animated: true,
            backdrop: 'static',
            initialState: {
                alertType: alertType,
            }
        });
    }


} 