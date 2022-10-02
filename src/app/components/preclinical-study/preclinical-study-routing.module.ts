import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CreateTrialComponent} from './create-trial/create-trial.component';
import {PreclinicalStudyComponent} from './preclinical-study.component';

const routes: Routes = [
    {
        component: PreclinicalStudyComponent,
        path: '',
    },
];

@NgModule({
    declarations: [PreclinicalStudyComponent, CreateTrialComponent],
    imports: [
        CommonModule,
        NgxSpinnerModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class PreclinicalStudyRoutingModule {}
