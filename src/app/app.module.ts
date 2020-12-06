import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { PassportModule } from '@federico1818/passport'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterModule } from 'src/app/register/register.module'

import { AlertComponent } from './shared/components/alert/alert.component'


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PassportModule.forRoot(environment.oauth),
        AppRoutingModule,
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
