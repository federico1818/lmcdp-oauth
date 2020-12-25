import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { PassportModule } from '@federico1818/passport'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginModule } from 'src/app/login/login.module'
import { RegisterModule } from 'src/app/register/register.module'
import { PasswordModule } from 'src/app/password/password.module'

import { AlertComponent } from './shared/components/alert/alert.component'
import { SuperService } from './shared/interceptors/super.service';
import { MessageComponent } from './shared/components/message/message.component'


@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        PassportModule.forRoot(environment.oauth),
        AppRoutingModule,
        LoginModule,
        RegisterModule,
        PasswordModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SuperService,
            multi: true
        }
    ],
    entryComponents: [
        AlertComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
