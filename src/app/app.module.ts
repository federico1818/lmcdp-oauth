import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { PassportModule } from '@federico1818/passport'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { SuperService } from './shared/interceptors/super.service'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PassportModule.forRoot(environment.oauth),
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: SuperService, 
            multi: true 
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
