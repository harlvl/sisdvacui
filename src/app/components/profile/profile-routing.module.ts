import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ProfileComponent} from './profile.component';

const routes: Routes = [
    {
        component: ProfileComponent,
        path: '',
    },
];

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        NgxSpinnerModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        FormsModule,
    ],
})

export class ProfileRoutingModule {}
