import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { PassportModule } from '@federico1818/passport'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginModule } from 'src/app/login/login.module'
import { RegisterModule } from 'src/app/register/register.module'

import { AlertComponent } from './shared/components/alert/alert.component'


@NgModule({
    declarations: [
        AppComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        PassportModule.forRoot(environment.oauth),
        AppRoutingModule,
        LoginModule,
        RegisterModule
    ],
    entryComponents: [
        AlertComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
