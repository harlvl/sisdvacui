import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BnNgIdleService } from 'bn-ng-idle';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { FileSaverModule } from 'ngx-filesaver';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthIdle } from './helpers/auth.idle';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptorService} from './helpers/jwt-interceptor.service';
import { Util } from './helpers/util';
import { AuthenticationService } from './services/auth.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent , HomeComponent, PageNotFoundComponent, ModalComponent,
  ],
    imports: [
        SharedModule,
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule,
        AppRoutesModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        FileSaverModule,
        CountdownModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
    ],
  providers: [
    AuthenticationService, Util, BnNgIdleService, CountdownGlobalConfig, AuthIdle,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent ],
})
export class AppModule { }
