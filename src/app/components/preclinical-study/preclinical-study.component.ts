import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { map } from 'rxjs/operators';
import {Study} from '../../models/study';
import {TrialService} from '../../services/trial.service';

@Component({
    selector: 'app-preclinical-study',
    styleUrls: ['preclinical-study.component.scss'],
    templateUrl: 'preclinical-study.component.html',
})

@Injectable({providedIn: 'root'})
export class PreclinicalStudyComponent implements OnInit {
    @ViewChild('createTrialModalBtn', null) public createTrialModal;
    public study: Study;
    public trials: any[];
    public trialsFirst: any;

    constructor(
        private trialService: TrialService,
        private SpinnerService: NgxSpinnerService,
        private route: ActivatedRoute,
        private router: Router) {
        this.study = new Study('Investigación Contra Infección N', 'Preclínica');
    }

    public ngOnInit(): void {
        console.log('init on the preclinical');
        this.trialsFirst = [];
        this.fillTrialList();

    }

    public checkAdvance() {

    }

    public fillTrialList() {
        this.getAllTrials();
    }

    public getAllTrials() {
        const dataInfo = this.trialService.getAllTrials().pipe(map((res) => {
            return res;
        })).subscribe((response) => {
            console.log(response);
            this.trialsFirst = response.payload;
        });
    }
}
