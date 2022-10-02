import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'preclinical-study',
        loadChildren: () => import('./components/preclinical-study/preclinical-study-routing.module').then((m) => m.PreclinicalStudyRoutingModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('./components/profile/profile-routing.module').then((m) => m.ProfileRoutingModule),
    },
    { path: '**', component: PageNotFoundComponent },

];

@NgModule({
    exports: [RouterModule],
    imports: [
      RouterModule.forRoot(routes),
    ],
    providers: [],
  })

export class AppRoutesModule { }
